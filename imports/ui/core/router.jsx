import React, { Component } from 'react';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { mount } from 'react-mounter';

// route components
import App from './layouts/App.jsx';
import MainContainer from './containers/MainContainer.jsx';
import NotFoundPage from './pages/NotFoundPage.jsx';

FlowRouter.notFound = {
    action: function() {
        mount(App, {
            content: <NotFoundPage />
        });
    }
};

FlowRouter.route('/', {
    name: 'main',
    action() {
        mount(App, {
            content: <MainContainer/>
        });
    }
});

FlowRouter.route('/not-found', {
    name: 'notFound',
    action: function() {
        mount(App, {
            content: <NotFoundPage />
        });
    }
});