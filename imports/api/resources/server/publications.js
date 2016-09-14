import { Meteor } from 'meteor/meteor';
import { Resources } from '../resources.js';

Meteor.publish('resources', function resourcesPublication(limit) {
    return Resources.find({}, {sort: {created: -1}, limit}, {fields: Resources.publicFields});
});