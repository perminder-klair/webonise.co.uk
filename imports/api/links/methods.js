import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import { Links } from './links.js';

Meteor.methods({
    'links.insert'(url) {
        check(url, String);

        // Make sure the user is logged in before inserting a task
        if (! Meteor.userId()) {
            throw new Meteor.Error('not-authorized');
        }

        Links.insert({
            url,
            createdAt: new Date(),
            owner: Meteor.userId(),
            username: Meteor.user().username
        });
    },
    'links.remove'(linkId) {
        check(linkId, String);

        Links.remove(linkId);
    },
    //todo
    'links.setChecked'(taskId, setChecked) {
        check(taskId, String);
        check(setChecked, Boolean);

        Links.update(taskId, { $set: { checked: setChecked } });
    },

    //todo
    'links.setPrivate'(taskId, setToPrivate) {
        check(taskId, String);
        check(setToPrivate, Boolean);

        const task = Tasks.findOne(taskId);

        // Make sure only the task owner can make a task private
        if (task.owner !== Meteor.userId()) {
            throw new Meteor.Error('not-authorized');
        }

        Links.update(taskId, { $set: { private: setToPrivate } });
    },
});
