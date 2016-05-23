import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

class SkillsCollection extends Mongo.Collection {
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

export const Skills = new SkillsCollection('skills');

Skills.schema = new SimpleSchema({
    title: {
        type: String,
        max: 200
    },
    description: {
        type: String,
        optional: true
    },
    type: {
        type: String
    },
    createdAt: {
        type: Date,
        denyUpdate: true
    }
});

Skills.attachSchema(Skills.schema);

Skills.publicFields = {
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
