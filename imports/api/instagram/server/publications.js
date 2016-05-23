import { Meteor } from 'meteor/meteor';
import { Instagram } from '../instagram.js';

Meteor.publish('instagram', function instagramPublication(limit = 10) {
    return Instagram.find({}, {sort: {created_time: -1}, limit});
});