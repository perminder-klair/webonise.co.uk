import { Meteor } from 'meteor/meteor';
import Stackable from 'stackable';
import async from 'async';
import Future from 'fibers/future';

import { Skills } from '../api/skills/skills.js';

const serviceConfig = ServiceConfiguration.configurations.findOne({service: 'stackable'});

let stackable = new Stackable(serviceConfig.stack_key);

exports.syncSkills = function () {
    console.log('start skills sync');
    let data;
    var fut = new Future();

    async.series([
        (callback) => {
            //get data from stackable
            stackable.getContainerItems(serviceConfig.skills_container, Meteor.bindEnvironment((error, result) => {
                //console.log(error, result);
                data = result.data;
                callback(error);
            }));
        },
        (callback) => {
            //first remove all docs in db
            Skills.remove({});
            callback(null);
        },
        Meteor.bindEnvironment((callback) => {
            //now insert new
            async.each(data, (row, callbackEach) => {
                //console.log(row.data);
                Skills.insert({
                    title: row.data.title,
                    type: row.data.type
                });

                callbackEach();
            }), (err) => {
                console.log('skill done');
                callback(null);
                fut.return(true);
            };
        })
    ]);

    return fut.wait();
};
