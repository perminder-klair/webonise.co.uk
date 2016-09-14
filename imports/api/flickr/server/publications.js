import { Meteor } from 'meteor/meteor';
import { Flickr } from '../flickr.js';

Meteor.publish('flickr', function flickrPublication(limit = 10) {
    return Flickr.find({}, {sort: {dateupload: -1}, limit}, {fields: Flickr.publicFields});
});