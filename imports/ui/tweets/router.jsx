import React, { Component } from 'react';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { mount } from 'react-mounter';

// route components
import App from '../core/layouts/App.jsx';
import TweetsContainer from './containers/TweetsContainer.jsx';

FlowRouter.route('/tweets', {
    name: 'tweets',
    action() {
        mount(App, {
            content: <TweetsContainer/>
        });
    }
});