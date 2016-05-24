import React from 'react';
import { FlowRouter } from 'meteor/kadira:flow-router';
import moment from 'moment';

const TweetItem = ({tweet}) => (
    <div className="tweet-card card-panel indigo lighten-4">
          <span className="text-grey darken-4">
              <i className="fa fa-twitter twitter"/>
              {tweet.body}
          </span>
          <span className="ago">
              {moment(tweet.date).fromNow()}
          </span>
    </div>
);

export default TweetItem;