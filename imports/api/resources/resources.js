import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

class ResourcesCollection extends Mongo.Collection {
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

export const Resources = new ResourcesCollection('resources');

Resources.schema = new SimpleSchema({
    title: {
        type: String,
        max: 200
    },
    description: {
        type: String,
        optional: true
    },
    url: {
        type: String
    },
    isPocket: {
        type: Boolean,
        defaultValue: false,
        optional: true
    },
    pocketAdded: {
        type: String
    },
    tags: {
        type: [String],
        optional: true
    },
    createdAt: {
        type: Date,
        denyUpdate: true
    }
});

Resources.attachSchema(Resources.schema);

Resources.publicFields = {
    title: 1,
    description: 1,
    type: 1
};

//Links.helpers({
//    list() {
//        return {};//Lists.findOne(this.listId);
//    },
//    editableBy(userId) {
//        return this.list().editableBy(userId);
//    },
//});
