import React, { Component } from 'react';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { mount } from 'react-mounter';

// route components
import App from '../core/layouts/App.jsx';
import InstagramContainer from './containers/InstagramContainer.jsx';

FlowRouter.route('/instagram', {
    name: 'instagram',
    action() {
        mount(App, {
            content: <InstagramContainer/>
        });
    }
});