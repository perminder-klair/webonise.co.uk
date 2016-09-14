import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

class LinksCollection extends Mongo.Collection {
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

export const Links = new LinksCollection('links');

Links.schema = new SimpleSchema({
    text: {
        type: String,
        max: 100,
        optional: true
    },
    url: {
        type: String,
        max: 200
    },
    createdAt: {
        type: Date,
        denyUpdate: true
    }
});

Links.attachSchema(Links.schema);

Links.publicFields = {
    text: 1,
    url: 1,
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
