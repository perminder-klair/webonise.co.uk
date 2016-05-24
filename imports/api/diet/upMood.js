import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

class UpMoodCollection extends Mongo.Collection {
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

export const UpMood = new UpMoodCollection('upMood');

UpMood.schema = new SimpleSchema({
    title: {
        type: String,
        max: 200
    },
    date: {
        type: String
    },
    createdAt: {
        type: Date,
        denyUpdate: true
    }
});

UpMood.attachSchema(UpMood.schema);

UpMood.publicFields = {
    title: 1,
    date: 1,
    createdAt: 1
};

//Links.helpers({
//    list() {
//        return {};//Lists.findOne(this.listId);
//    },
//    editableBy(userId) {
//        return this.list().editableBy(userId);
//    },
//});
