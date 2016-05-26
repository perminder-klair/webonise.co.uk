const CronJob = require('cron').CronJob;
const Stackable = require('stackable');

var stackable = new Stackable('eeFuYBqGA8Qv');


var job = new CronJob({
    cronTime: '* * * * *',
    onTick: function() {
        console.log('You will see this message every minute');
        stackable.getContainers((error, result) => {
            console.log(error, result);
        });
    },
    start: false
});
job.start();