import React, { Component } from 'react';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { mount } from 'react-mounter';

// route components
import App from '../core/layouts/App.jsx';
import FlickrContainer from './containers/FlickrContainer.jsx';

FlowRouter.route('/flickr', {
    name: 'flickr',
    action() {
        mount(App, {
            content: <FlickrContainer/>
        });
    }
});