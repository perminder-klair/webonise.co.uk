import { Meteor } from 'meteor/meteor';
const CronJob = require('cron').CronJob;

import {syncSkills} from './sync-skills.js';

Meteor.methods({
    'sync.skills'() {
        syncSkills();
    }
});

var job = new CronJob({
    cronTime: '* * * * *',
    onTick: function() {
        console.log('You will see this message every minute');
        //syncSkills();
    },
    start: false
});
job.start();