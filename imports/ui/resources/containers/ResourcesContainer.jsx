import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';
import { FlowRouter } from 'meteor/kadira:flow-router';
import _ from 'underscore';

import { Resources } from '../../../api/resources/resources.js';

import ResourcesPage from '../pages/ResourcesPage.jsx';

export default createContainer(() => {
    let limit = !_.isUndefined(FlowRouter.getQueryParam('limit')) ? parseInt(FlowRouter.getQueryParam('limit')) : Meteor.settings.public.limit;
    Meteor.subscribe('resources', limit);

    return {
        resources: Resources.find({}, {sort: {created: -1}}).fetch() || [],
        limit: limit
    };
}, ResourcesPage);