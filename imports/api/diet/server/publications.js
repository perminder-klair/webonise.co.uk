import { Meteor } from 'meteor/meteor';
import { Diet } from '../diet.js';

Meteor.publish('diet.today', function dietTodayPublication() {
    return Diet.find({}, {sort: {date: -1}, limit: 1});
});