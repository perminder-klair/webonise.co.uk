import React, { Component } from 'react';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { mount } from 'react-mounter';

// route components
import App from '../core/layouts/App.jsx';
import GithubContainer from './containers/GithubContainer.jsx';

FlowRouter.route('/git', {
    name: 'github',
    action() {
        mount(App, {
            content: <GithubContainer/>
        });
    }
});