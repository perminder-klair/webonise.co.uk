import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

class InstagramCollection extends Mongo.Collection {
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

export const Instagram = new InstagramCollection('instagram');

Instagram.schema = new SimpleSchema({
    instaId: {
        type: String
    },
    created_time: {
        type: String
    },
    link: {
        type: String
    },
    images: {
        type: [Object],
        optional: true,
        blackbox: true
    },
    caption: {
        type: Object,
        optional: true,
        blackbox: true
    },
    createdAt: {
        type: Date,
        denyUpdate: true
    }
});

Instagram.attachSchema(Instagram.schema);

Instagram.publicFields = {
    body: 1,
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
