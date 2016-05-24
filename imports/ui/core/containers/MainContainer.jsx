import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';

import { Tweets } from '../../../api/tweets/tweets.js';
import { Github } from '../../../api/github/github.js';
import { Instagram } from '../../../api/instagram/instagram.js';
import { Diet } from '../../../api/diet/diet.js';
import { Flickr } from '../../../api/flickr/flickr.js';

import MainPage from '../pages/MainPage.jsx';

export default createContainer(() => {
    Meteor.subscribe('tweets', 1);
    Meteor.subscribe('github', 3);
    Meteor.subscribe('instagram', 6);
    Meteor.subscribe('diet.today');
    Meteor.subscribe('flickr', 6);

    return {
        tweet: Tweets.findOne() || {},
        github: Github.find().fetch() || [],
        instagram: Instagram.find().fetch() || [],
        diet: Diet.findOne() || {},
        flickr: Flickr.find().fetch() || []
    };
}, MainPage);