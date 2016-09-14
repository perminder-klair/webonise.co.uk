import { Meteor } from 'meteor/meteor';
import async from 'async';
import Stackable from 'stackable';

import { Timeline } from '../api/timeline/timeline.js';

const serviceConfig = ServiceConfiguration.configurations.findOne({service: 'stackable'});
var stackable = new Stackable(serviceConfig.stack_key);

exports.syncTimeline = function() {
    console.log('start sync');
    let data;

    async.series([
        Meteor.bindEnvironment((callback) => {
            //get data from stackable
            stackable.getContainerItems(serviceConfig.timeline_container, (error, result) => {
                //console.log(error, result);
                data = result.data;
                callback(null);
            });
        }),
        Meteor.bindEnvironment((callback) => {
            //first remove all docs in db
            Timeline.remove({});
            callback(null);
        }),
        Meteor.bindEnvironment((callback) => {
            //now insert new
            async.each(data, (row, callbackEach) => {
                //console.log(row.data);
                Timeline.insert({
                    title: row.data.title,
                    short_description: row.data.shortDescription,
                    description: row.data.description,
                    event_time: row.data.eventTime,
                    icon: row.data.icon,
                    color: row.data.color
                });
                callbackEach();
            }, (err) => {
                callback(null);
            });
        })
    ]);
};
