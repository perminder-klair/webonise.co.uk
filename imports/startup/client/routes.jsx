import React, { Component } from 'react';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { mount } from 'react-mounter';

// route components
import MainLayout from '../../ui/containers/MainLayout.jsx';
import MainContainer from '../../ui/containers/MainContainer.jsx';

FlowRouter.route('/', {
    name: 'main',
    action() {
        mount(MainLayout, {
            content: <MainContainer/>
        });
    }
});