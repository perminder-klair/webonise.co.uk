import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';

import { Flickr } from '../../../api/flickr/flickr.js';

import FlickrPage from '../pages/FlickrPage.jsx';

export default createContainer(() => {
    let limit = !_.isUndefined(FlowRouter.getQueryParam('limit')) ? parseInt(FlowRouter.getQueryParam('limit')) : Meteor.settings.public.limit;
    Meteor.subscribe('flickr', limit);

    return {
        flickr: Flickr.find({}, {sort: {dateupload: -1}}).fetch() || [],
        limit: limit
    };
}, FlickrPage);