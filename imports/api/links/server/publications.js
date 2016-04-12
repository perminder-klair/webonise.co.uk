import { Meteor } from 'meteor/meteor';
import { Links } from '../links.js';

Meteor.publish('links', function linksPublication() {
    return Links.find();
});
