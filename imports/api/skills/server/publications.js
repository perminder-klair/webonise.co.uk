import { Meteor } from 'meteor/meteor';
import { Skills } from '../skills.js';

Meteor.publish('skills', function skillsPublication() {
    return Skills.find({}, {sort: {title: 1}}, {fields: Skills.publicFields});
});