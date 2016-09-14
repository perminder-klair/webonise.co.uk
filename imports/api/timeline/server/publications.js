import { Meteor } from 'meteor/meteor';
import { Timeline } from '../timeline.js';

Meteor.publish('timeline', function timelinePublication() {
    return Timeline.find({}, {sort: {event_time: -1}}, {fields: Timeline.publicFields});
});