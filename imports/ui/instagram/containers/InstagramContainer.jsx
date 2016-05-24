import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';

import { Instagram } from '../../../api/instagram/instagram.js';

import InstagramPage from '../pages/InstagramPage.jsx';

export default createContainer(() => {
    let limit = !_.isUndefined(FlowRouter.getQueryParam('limit')) ? parseInt(FlowRouter.getQueryParam('limit')) : Meteor.settings.public.limit;
    Meteor.subscribe('instagram', limit);

    return {
        instagram: Instagram.find({}, {sort: {created_time: -1}}).fetch() || [],
        limit: limit
    };
}, InstagramPage);