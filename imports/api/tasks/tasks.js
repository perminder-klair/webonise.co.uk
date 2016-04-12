import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

class TasksCollection extends Mongo.Collection {
    insert(doc, callback) {
        const ourDoc = doc;
        ourDoc.createdAt = ourDoc.createdAt || new Date();
        const result = super.insert(ourDoc, callback);
        return result;
    }
    update(selector, modifier) {
        const result = super.update(selector, modifier);
        return result;
    }
    remove(selector) {
        const todos = this.find(selector).fetch();
        const result = super.remove(selector);
        return result;
    }
}

export const Tasks = new TasksCollection('Tasks');

Tasks.schema = new SimpleSchema({
    text: {
        type: String,
        max: 100,
    },
    createdAt: {
        type: Date,
        denyUpdate: true,
    },
    checked: {
        type: Boolean,
        defaultValue: false,
    },
});

Tasks.attachSchema(Tasks.schema);

Tasks.publicFields = {
    listId: 1,
    text: 1,
    createdAt: 1,
    checked: 1,
};

//Tasks.helpers({
//    list() {
//        return {};//Lists.findOne(this.listId);
//    },
//    editableBy(userId) {
//        return this.list().editableBy(userId);
//    },
//});
