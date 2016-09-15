import { Meteor } from 'meteor/meteor';
import { HTTP } from 'meteor/http';
import async from 'async';
import _ from 'underscore';
import moment from 'moment';

import { Resources } from '../api/resources/resources.js';

const serviceConfig = ServiceConfiguration.configurations.findOne({service: 'pocket'});
const consumer_key = serviceConfig.consumer_key;
const access_token = serviceConfig.access_token;

exports.syncPocket = function() {
    console.log('start pocket sync');
    let data;
    let lastItem;
    let since = null;

    async.series([
        Meteor.bindEnvironment((callback) => {
            //first get last pocket item
            lastItem = Resources.findOne({isPocket: true}, {sort: {pocketAdded: -1}});
            callback();
        }),
        Meteor.bindEnvironment((callback) => {
            if (lastItem) {
                //data found then get from that date
                //set since from last db item
                since = parseInt(lastItem.pocketAdded) + 1;
            }

            //get data from pocket
            var params = {
                "consumer_key": consumer_key,
                "access_token": access_token,
                "favorite": 1,
                "sort": "newest",
                "detailType": "complete"
            };

            if (since !== null) {
                params['since'] = since;
            }

            //console.log(data);
            HTTP.call('GET', 'https://getpocket.com/v3/get', {
                "data": params
            }, function (err, res) {
                data = res.data.list;
                callback(err);
            });
        }),
        Meteor.bindEnvironment((callback) => {
            //insert new data
            async.each(data, (row, callbackEach) => {
                if (row.status == '0') {
                    if (row.resolved_title.length > 3) {
                        //check if it exists in db, only insert if does on exists
                        if (_.isUndefined(Resources.findOne({title: row.resolved_title}))) {
                            var item = {
                                title: row.resolved_title,
                                description: row.excerpt,
                                url: row.resolved_url,
                                isPocket: true,
                                pocketAdded: row.time_updated
                            };

                            if (!_.isUndefined(row.tags)) {
                                item['tags'] = _.keys(row.tags);
                            }

                            //console.log(item);
                            Resources.insert(item);
                            callbackEach();
                        } else {
                            callbackEach();
                        }
                    } else {
                        callbackEach();
                    }
                } else {
                    callbackEach();
                }
            }, (err) => {
                callback(null);
            });
        })
    ]);
};
