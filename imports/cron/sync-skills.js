import { Meteor } from 'meteor/meteor';
import Stackable from 'stackable';
import async from 'async';

import { Skills } from '../api/skills/skills.js';

let { stack_key, skills_container } = Meteor.settings.stackable;

let stackable = new Stackable(stack_key);

exports.syncSkills = function () {
    console.log('start skills sync');
    let data;

    async.series([
        Meteor.bindEnvironment((callback) => {
            //get data from stackable
            stackable.getContainerItems(skills_container, Meteor.bindEnvironment((error, result) => {
                console.log(error, result);
                data = result.data;
                callback(error);
            }));
        }),
        (callback) => {
            //first remove all docs in db
            Skills.remove({});
            callback(null);
        },
        (callback) => {
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
        }
    ]);
};
