import { Meteor } from 'meteor/meteor';
import { ServiceConfiguration } from 'meteor/service-configuration';
import _ from 'underscore';

if (!_.isUndefined(Meteor.settings.private) && !_.isUndefined(Meteor.settings.private.oAuth)) {
    _.each(Meteor.settings.private.oAuth, (config, service) => {
        ServiceConfiguration.configurations.upsert(
            { service },
            { $set: config }
        );
    });
}

//to get value
//console.log('configureServices', ServiceConfiguration.configurations.findOne({service: 'flickr'}));