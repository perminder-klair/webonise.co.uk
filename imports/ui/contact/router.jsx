import React, { Component } from 'react';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { mount } from 'react-mounter';

// route components
import App from '../core/layouts/App.jsx';
import ContactPage from './pages/Contact.jsx';

FlowRouter.route('/contact', {
    name: 'contact',
    action() {
        mount(App, {
            content: <ContactPage/>
        });
    }
});
