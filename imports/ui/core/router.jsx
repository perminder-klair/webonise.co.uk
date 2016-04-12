import React, { Component } from 'react';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { mount } from 'react-mounter';

// route components
import App from './layouts/App.jsx';
import MainPage from './pages/MainPage.jsx';

FlowRouter.route('/', {
    name: 'main',
    action() {
        mount(App, {
            content: <MainPage/>
        });
    }
});
