import { Meteor } from 'meteor/meteor';
import { HTTP } from 'meteor/http';
import async from 'async';
import _ from 'underscore';
import moment from 'moment';
import Future from 'fibers/future';

import { Github } from '../api/github/github.js';

const serviceConfig = ServiceConfiguration.configurations.findOne({service: 'github'});
const username = serviceConfig.username;

var createData = function (data) {
    return {
        gitId: data.id,
        name: data.name,
        full_name: data.full_name,
        html_url: data.html_url,
        git_url: data.git_url,
        default_branch: data.default_branch,
        description: data.description,
        created_at: data.created_at,
        updated_at: data.updated_at,
        stargazers_count: data.stargazers_count,
        forks_count: data.forks_count,
        watchers_count: data.watchers_count,
        open_issues_count: data.open_issues_count
    };
};

exports.syncGithub =  function() {
    console.log('start github sync');
    let data;
    let lastItem;
    var fut = new Future();

    async.series([
        (callback) => {
            //first get last github item
            lastItem = Github.findOne({}, {sort: {created_at: -1}});
            callback();
        },
        Meteor.bindEnvironment((callback) => {
            //get data from github
            HTTP.call('GET', `https://api.github.com/users/${username}/repos`, {
                "data": {
                    "type": "owner",
                    "sort": "created",
                    "direction": "DESC"
                },
                "headers": {
                    "User-Agent": username
                }
            }, (err, res) => {
                data = res.data;
                callback(err);
            });
        }),
        (callback) => {
            //insert new data
            async.each(data, (row, callbackEach) => {
                if (!_.isUndefined(lastItem) && !_.isUndefined(lastItem[0])) {
                    if (moment(lastItem[0].created_at).isBefore(row.created_at)) {
                        //if repo does no exists
                        Github.insert(createData(row), {validate: false});
                        callbackEach();
                    } else {
                        //if exists then update it
                        Github.update({'gitId': String(row.id)}, {$set: createData(row)}, {validate: false});
                        callbackEach();
                    }
                } else {
                    //no items in db
                    Github.insert(createData(row), {validate: false});
                    callbackEach();
                }
            }, (err) => {
                callback(err);
                fut.return(true);
            });
        }
    ]);

    return fut.wait();
};
