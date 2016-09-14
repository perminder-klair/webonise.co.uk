import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

class TimelineCollection extends Mongo.Collection {
    insert(doc, callback) {
        const ourDoc = doc;
        ourDoc.createdAt = ourDoc.createdAt || new Date();
        return super.insert(ourDoc, callback);
    }
    update(selector, modifier) {
        return super.update(selector, modifier);
    }
    remove(selector) {
        return super.remove(selector);
    }
}

export const Timeline = new TimelineCollection('timeline');

// Deny all client-side updates since we will be using methods to manage this collection
Timeline.deny({
    insert() { return true; },
    update() { return true; },
    remove() { return true; }
});

Timeline.schema = new SimpleSchema({
    title: {
        type: String,
        max: 200
    },
    short_description: {
        type: String,
        optional: true
    },
    description: {
        type: String
    },
    event_time: {
        type: Date
    },
    icon: {
        type: String,
        optional: true
    },
    color: {
        type: String,
        optional: true
    },
    createdAt: {
        type: Date,
        denyUpdate: true
    }
});

Timeline.attachSchema(Timeline.schema);

Timeline.publicFields = {
    title: 1,
    short_description: 1,
    description: 1,
    icon: 1,
    color: 1
};
