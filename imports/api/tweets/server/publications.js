import { Meteor } from 'meteor/meteor';
import { Tweets } from '../tweets.js';

Meteor.publish('tweets', function tweetsPublication(limit = 10) {
    return Tweets.find({}, {sort: {date: -1}, limit}, {fields: Tweets.publicFields});
});