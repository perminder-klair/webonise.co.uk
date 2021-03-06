import { Meteor } from 'meteor/meteor';
import TwitterApi from 'twitter';
import async from 'async';
import _ from 'underscore';
import moment from 'moment';

import { Tweets } from '../api/tweets/tweets.js';

const serviceConfig = ServiceConfiguration.configurations.findOne({service: 'twitter'});
const twitterClient = new TwitterApi({
    consumer_key: serviceConfig.consumer_key,
    consumer_secret: serviceConfig.consumer_secret,
    access_token_key: serviceConfig.access_token_key,
    access_token_secret: serviceConfig.access_token_secret
});

exports.syncTwitter = function() {
    console.log('start twitter sync');
    let data;
    let lastItem;
    let query = {exclude_replies: true, count: 25};

    async.series([
        Meteor.bindEnvironment((callback) => {
            //first get last twitter item
            lastItem = Tweets.findOne({}, {sort: {date: -1}});
            callback();
        }),
        Meteor.bindEnvironment((callback) => {
            if (lastItem) {
                query['since_id'] = lastItem.twid;
            }

            //get data from twitter
            twitterClient.get('statuses/user_timeline', query, function(error, params, response){
                data = params;
                callback(error);
            });
        }),
        Meteor.bindEnvironment((callback) => {
            //insert new data
            async.each(data, (row, callbackEach) => {
                if (!_.isUndefined(query['since_id'])) {
                    if (query['since_id'] == lastItem.id) {
                        return callbackEach();
                    }
                }

                Tweets.insert({
                    twid: row.id,
                    body: row.text,
                    date: row.created_at
                });
                callbackEach();
            }, (err) => {
                callback(null);
            });
        })
    ]);
};
