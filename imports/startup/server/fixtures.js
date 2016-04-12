import { Meteor } from 'meteor/meteor';
import { Links } from '../../api/links/links.js';

// if the database is empty on server start, create some sample data.
Meteor.startup(() => {
    if (Links.find().count() === 0) {
        const data = [
            {
                url: 'http://www.amazon.co.uk'
            }
        ];

        let timestamp = (new Date()).getTime();
        data.forEach((list) => {
            const linkId = Links.insert({
                url: list.url,
                createdOn: timestamp,
                checked: true
            });
        });
    }
});