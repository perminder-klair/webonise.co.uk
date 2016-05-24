import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';

import { Tweets } from '../../../api/tweets/tweets.js';

import TweetsPage from '../pages/TweetsPage.jsx';

export default createContainer(() => {
    let limit = !_.isUndefined(FlowRouter.getQueryParam('limit')) ? parseInt(FlowRouter.getQueryParam('limit')) : Meteor.settings.public.limit;
    Meteor.subscribe('tweets', limit);

    return {
        tweets: Tweets.find({}, {sort: {date: -1}}).fetch() || [],
        limit: limit
    };
}, TweetsPage);