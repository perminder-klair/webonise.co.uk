import { Meteor } from 'meteor/meteor';
import { Github } from '../github.js';

Meteor.publish('github', function githubPublication(limit = 10) {
    return Github.find({}, {sort: {updated_at: -1}, limit}, {fields: Github.publicFields});
});