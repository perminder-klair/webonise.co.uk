import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

class FlickrCollection extends Mongo.Collection {
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

export const Flickr = new FlickrCollection('flickr');

// Deny all client-side updates since we will be using methods to manage this collection
Flickr.deny({
    insert() { return true; },
    update() { return true; },
    remove() { return true; }
});

Flickr.schema = new SimpleSchema({
    url: {
        type: String
    },
    flickr_id: {
        type: String
    },
    datetaken: {
        type: String
    },
    dateupload: {
        type: String
    },
    createdAt: {
        type: Date,
        denyUpdate: true
    }
});

Flickr.attachSchema(Flickr.schema);

Flickr.publicFields = {
    createdAt: 1
};
