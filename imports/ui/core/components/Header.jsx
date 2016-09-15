import { Meteor } from 'meteor/meteor';
import React, { Component } from 'react';
import { FlowRouter } from 'meteor/kadira:flow-router';

class Header extends Component {
    componentDidMount() {
        console.log('like my site? contact me! or have a look here https://github.com/perminder-klair/webonise.co.uk ;)');

        //init header nav
        $(".button-collapse").sideNav();
    }

    render() {
        return (
            <header className="header indigo z-depth-1">
                <img src="/images/avatar-me.jpg" alt="" class="circle responsive-img" />
                <h1>{Meteor.settings.public.person_name}</h1>
                <p>{Meteor.settings.public.tag_line}</p>
                <nav className="indigo">
                    <div className="nav-wrapper">
                        <a href="#" data-activates="mobile-demo" className="button-collapse">
                            <i className="mdi-navigation-menu"/>
                        </a>
                        <ul className="hide-on-med-and-down">
                            <li><a href={FlowRouter.path('main')}>about me</a></li>
                            <li><a href={FlowRouter.path('resume')}>resume</a></li>
                            <li><a href={FlowRouter.path('contact')}>contact</a></li>
                            <li><a href={FlowRouter.path('resources')}>resources</a></li>
                        </ul>
                        <ul className="side-nav" id="mobile-demo">
                            <li><a href={FlowRouter.path('main')}>about me</a></li>
                            <li><a href={FlowRouter.path('resume')}>resume</a></li>
                            <li><a href={FlowRouter.path('contact')}>contact</a></li>
                            <li><a href={FlowRouter.path('resources')}>resources</a></li>
                        </ul>
                    </div>
                </nav>
            </header>
        )
    }
}

export default Header;