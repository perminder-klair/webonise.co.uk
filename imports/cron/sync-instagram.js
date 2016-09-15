import { Meteor } from 'meteor/meteor';
const ig = require('instagram-node').instagram();
import async from 'async';
import _ from 'underscore';
import moment from 'moment';

import { Instagram } from '../api/instagram/instagram.js';

const serviceConfig = ServiceConfiguration.configurations.findOne({service: 'instagram'});
const accessToken = serviceConfig.access_token;

let getSelfMedia = function (options, all_media, callBackMain) {
    options['count'] = 33;

    ig.user_self_media_recent(options, function (err, medias, pagination, remaining, limit) {
        if(err) {
            //throw new Meteor.Error(401, err);
            console.log('instagram sync failed', err);
        } else {
            all_media = medias.concat(all_media);

            if (!_.isUndefined(pagination.next_max_id)) {
                //got more media
                options['max_id'] = pagination.next_max_id;
                getSelfMedia(options, all_media, function (data) {
                    all_media = data.concat(all_media);
                    callBackMain(data);
                });
            } else {
                callBackMain(all_media);
            }
        }
    });
};

let setData = function (data) {
    return {
        instaId: data.id,
        created_time: data.created_time,
        link: data.link,
        images: data.images,
        caption: data.caption
    };
};

exports.syncInstagram = function() {
    console.log('start instagram sync');
    let data;
    let lastItem;
    let options = {
        max_id: null
    };

    async.series([
        Meteor.bindEnvironment((callback) => {
            //first get last Instagram item
            lastItem = Instagram.findOne({}, {sort: {created_time: -1}});
            callback();
        }),
        Meteor.bindEnvironment((callback) => {
            if (lastItem) {
                options['min_id'] = lastItem.instaId;
            }

            //get data from instagram
            ig.use({
                access_token: accessToken
            });

            if (_.isUndefined(options['max_id'])) {
                options['max_id'] = null;
            }

            getSelfMedia(options, [], function (result) {
                data = result;
                callback();
            });
        }),
        Meteor.bindEnvironment((callback) => {
            //insert new data
            async.each(data, (row, callbackEach) => {
                if (!_.isUndefined(options['min_id'])) {
                    if (options['min_id'] == row.id) {
                        return callbackEach();
                    }
                }
                Instagram.insert(setData(row));
                callbackEach();
            }, (err) => {
                callback(null);
            });
        })
    ]);
};
