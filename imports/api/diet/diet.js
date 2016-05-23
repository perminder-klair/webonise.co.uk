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
}

export const Diet = new DietCollection('diet');

Diet.schema = new SimpleSchema({
    km: {
        type: Number,
        label: "Distance KM",
        min: 0,
        optional: true
    },
    steps: {
        type: Number,
        label: "Steps",
        min: 0,
        optional: true
    },
    calories: {
        type: Number,
        label: "Calories",
        min: 0,
        optional: true
    },
    sleepTime: {
        type: String,
        label: "Sleep Time",
        optional: true
    },
    awakeTime: {
        type: Number,
        label: "Awake Time",
        min: 0,
        optional: true
    },
    asleepTime: {
        type: Number,
        label: "Asleep TIme",
        min: 0,
        optional: true
    },
    meals: {
        type: Object,
        label: 'Meals',
        optional: true
    },
    "meals.title": {
        type: String,
        label: 'Title',
        optional: true
    },
    "meals.drinks": {
        type: String,
        label: 'Drinks',
        optional: true
    },
    "meals.foods": {
        type: String,
        label: 'Foods',
        optional: true
    },
    "meals.calcium": {
        type: String,
        label: 'Calcium',
        optional: true
    },
    "meals.calories": {
        type: String,
        label: 'Calories',
        optional: true
    },
    "meals.carbohydrate": {
        type: String,
        label: 'Carbohydrate',
        optional: true
    },
    "meals.cholesterol": {
        type: String,
        label: 'Cholesterol',
        optional: true
    },
    "meals.fat": {
        type: String,
        label: 'Fat',
        optional: true
    },
    "meals.fiber": {
        type: String,
        label: 'Fiber',
        optional: true
    },
    "meals.foodScore": {
        type: String,
        label: 'Food Score',
        optional: true
    },
    "meals.iron": {
        type: String,
        label: 'Iron',
        optional: true
    },
    "meals.water": {
        type: String,
        label: 'Water',
        optional: true
    },
    "meals.potassium": {
        type: String,
        label: 'Potassium',
        optional: true
    },
    "meals.protein": {
        type: String,
        label: 'Protein',
        optional: true
    },
    "meals.sodium": {
        type: String,
        label: 'Sodium',
        optional: true
    },
    "meals.sugar": {
        type: String,
        label: 'Sugar',
        optional: true
    },
    date: {
        type: String,
        label: "Date"
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
