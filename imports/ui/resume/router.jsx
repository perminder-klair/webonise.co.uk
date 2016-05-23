import React, { Component } from 'react';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { mount } from 'react-mounter';

// route components
import App from '../core/layouts/App.jsx';
import ResumeContainer from './containers/ResumeContainer.jsx';

FlowRouter.route('/resume', {
    name: 'resume',
    action() {
        mount(App, {
            content: <ResumeContainer/>
        });
    }
});