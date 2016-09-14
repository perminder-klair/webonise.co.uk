import { Meteor } from 'meteor/meteor';
import async from 'async';
import _ from 'underscore';
import moment from 'moment';

import { Diet } from '../api/diet/diet.js';
import { UpMood } from '../api/diet/upMood.js';

const serviceConfig = ServiceConfiguration.configurations.findOne({service: 'jawbone_up'});
const up = require('jawbone-up')({
    access_token: serviceConfig.access_token,
    client_secret: serviceConfig.client_secret
});

let syncMood = function () {
    let data;
    let today = moment().format('YYYYMMDD');

    async.series([
        Meteor.bindEnvironment((callback) => {
            up.mood.get({}, function(err, body) {
                data = JSON.parse(body).data;
                callback(err);
            });
        }),
        Meteor.bindEnvironment((callback) => {
            var title = data.title;

            //update data
            UpMood.upsert({
                date: today
            }, {
                $set: {
                    title: title
                }
            }, {
                validate: false
            });

            callback(null);
        })
    ]);
};

let syncMoves = function () {
    let data;

    async.series([
        Meteor.bindEnvironment((callback) => {
            up.moves.get({}, function(err, body) {
                data = JSON.parse(body).data;
                callback(err);
            });
        }),
        Meteor.bindEnvironment((callback) => {
            var result = data.items[0];

            //console.log('diet', result);
            //update data
            console.log('date', result.date);

            console.log(Diet.findOne({date: result.date}));
            if (!_.isUndefined(Diet.findOne({date: result.date}))) {
                console.log('update');
                Diet.update({
                    date: result.date
                }, {
                    $set: {
                        km: result.details.km,
                        steps: result.details.steps,
                        calories: result.details.calories
                    }
                });
            } else {
                console.log('insert');
                Diet.insert({
                    km: result.details.km,
                    steps: result.details.steps,
                    calories: result.details.calories,
                    date: result.date
                });
            }


            //let saveRes = Diet.upsert({
            //    date: result.date
            //}, {
            //    $set: {
            //        km: result.details.km,
            //        steps: result.details.steps,
            //        calories: result.details.calories
            //    }
            //});
            //let saveRes = Diet.insert({
            //    km: result.details.km,
            //    steps: result.details.steps,
            //    calories: result.details.calories,
            //    date: result.date
            //});
            //console.log('saveRes', saveRes);

            callback(null);
        })
    ]);
};

exports.syncJawboneUp = function() {
    console.log('start sync');

    syncMood();
    syncMoves();
};
