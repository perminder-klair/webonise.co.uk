import { Meteor } from 'meteor/meteor';
import async from 'async';
import Stackable from 'stackable';
import moment from 'moment';

import { Timeline } from '../api/timeline/timeline.js';

const serviceConfig = ServiceConfiguration.configurations.findOne({service: 'stackable'});
var stackable = new Stackable(serviceConfig.stack_key);

exports.syncTimeline = function() {
    console.log('start sync');
    let data;

    async.series([
        Meteor.bindEnvironment((callback) => {
            //get data from stackable
            stackable.getContainerItems(serviceConfig.timeline_container, Meteor.bindEnvironment((error, result) => {
                //console.log(error, result);
                data = result.data;
                callback(error);
            }));
        }),
        (callback) => {
            //first remove all docs in db
            Timeline.remove({});
            callback(null);
        },
        Meteor.bindEnvironment((callback) => {
            //now insert new
            async.each(data, (row, callbackEach) => {
                //console.log(row.data);
                Timeline.insert({
                    title: row.data.title,
                    short_description: row.data.shortDescription,
                    description: row.data.description,
                    event_time: row.data.eventTime,//moment(row.data.eventTime, "YYYY MM DD").isValid() ? new Date(moment(row.data.eventTime, "YYYY MM DD").format()) : new Date(),
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
