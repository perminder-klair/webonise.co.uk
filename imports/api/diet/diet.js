import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

class DietCollection extends Mongo.Collection {
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
    upsert(selector, modifier) {
        return super.upsert(selector, modifier);
    }
}

export const Diet = new DietCollection('diet');

Diet.schema = new SimpleSchema({
    km: {
        type: String,
        optional: true
    },
    steps: {
        type: Number,
        min: 0,
        optional: true
    },
    calories: {
        type: String,
        optional: true
    },
    sleepTime: {
        type: String,
        optional: true
    },
    awakeTime: {
        type: Number,
        min: 0,
        optional: true
    },
    asleepTime: {
        type: Number,
        min: 0,
        optional: true
    },
    meals: {
        type: Object,
        optional: true
    },
    "meals.title": {
        type: String,
        optional: true
    },
    "meals.drinks": {
        type: String,
        optional: true
    },
    "meals.foods": {
        type: String,
        optional: true
    },
    "meals.calcium": {
        type: String,
        optional: true
    },
    "meals.calories": {
        type: String,
        optional: true
    },
    "meals.carbohydrate": {
        type: String,
        optional: true
    },
    "meals.cholesterol": {
        type: String,
        optional: true
    },
    "meals.fat": {
        type: String,
        optional: true
    },
    "meals.fiber": {
        type: String,
        optional: true
    },
    "meals.foodScore": {
        type: String,
        optional: true
    },
    "meals.iron": {
        type: String,
        optional: true
    },
    "meals.water": {
        type: String,
        optional: true
    },
    "meals.potassium": {
        type: String,
        optional: true
    },
    "meals.protein": {
        type: String,
        optional: true
    },
    "meals.sodium": {
        type: String,
        optional: true
    },
    "meals.sugar": {
        type: String,
        optional: true
    },
    date: {
        type: String
    },
    createdAt: {
        type: Date,
        denyUpdate: true
    }
});

Diet.attachSchema(Diet.schema);

Diet.publicFields = {
    km: 1,
    steps: 1,
    calories: 1,
    sleepTime: 1,
    awakeTime: 1,
    asleepTime: 1,
    meals: 1,
    date: 1
};

//Links.helpers({
//    list() {
//        return {};//Lists.findOne(this.listId);
//    },
//    editableBy(userId) {
//        return this.list().editableBy(userId);
//    },
//});
