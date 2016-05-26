import { Meteor } from 'meteor/meteor';
import Stackable from 'stackable';
import async from 'async';

import { Skills } from '../api/skills/skills.js';

var stackable = new Stackable(Meteor.settings.stackable.stack_key);

exports.syncSkills = function() {
    console.log('start sync');
    let data;

    async.series([
        Meteor.bindEnvironment((callback) => {
            //get data from stackable
            stackable.getContainerItems(Meteor.settings.stackable.skills_container, (error, result) => {
                //console.log(error, result);
                data = result.data;
                callback(null);
            });
        }),
        Meteor.bindEnvironment((callback) => {
            //first remove all docs in db
            Skills.remove({});
            callback(null);
        }),
        Meteor.bindEnvironment((callback) => {
            //now insert new
            async.each(data, (row, callbackEach) => {
                //console.log(row.data);
                Skills.insert({
                    title: row.data.title,
                    type: row.data.type
                });
                callbackEach();
            }, (err) => {
                callback(null);
            });
        })
    ]);
};
