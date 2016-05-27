import { Meteor } from 'meteor/meteor';
const CronJob = require('cron').CronJob;

import {syncSkills} from './sync-skills.js';
import {syncTimeline} from './sync-timeline.js';
import {syncFlickr} from './sync-flickr';
import {syncGithub} from './sync-github';

Meteor.methods({
    'sync'() {
        //syncSkills();
        //syncTimeline();
        //syncFlickr();
        //syncGithub();
    }
});

var job = new CronJob({
    cronTime: '* * * * *',
    onTick: function() {
        console.log('You will see this message every minute');
        //syncSkills();
        //syncTimeline();
        //syncFlickr();
        //syncGithub();
    },
    start: false
});
job.start();