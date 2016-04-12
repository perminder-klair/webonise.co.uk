import { Meteor } from 'meteor/meteor';
import { Tasks } from '../../api/tasks/tasks.js';

// if the database is empty on server start, create some sample data.
Meteor.startup(() => {
    if (Tasks.find().count() === 0) {
        const data = [
            {
                text: 'Meteor Principles',
            }
        ];

        let timestamp = (new Date()).getTime();

        data.forEach((list) => {
            const listId = Tasks.insert({
                text: list.text,
                createdOn: timestamp,
                checked: true
            });
        });
    }
});