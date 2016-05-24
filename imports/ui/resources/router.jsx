import React, { Component } from 'react';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { mount } from 'react-mounter';

// route components
import App from '../core/layouts/App.jsx';
import ResourcesContainer from './containers/ResourcesContainer.jsx';

FlowRouter.route('/resources', {
    name: 'resources',
    action() {
        mount(App, {
            content: <ResourcesContainer/>
        });
    }
});