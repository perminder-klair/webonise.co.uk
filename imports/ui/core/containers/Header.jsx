import React, { Component } from 'react';

const Header = () => (
    <header className="header indigo z-depth-1">
        <img src="/images/avatar-me.jpg" alt="" class="circle responsive-img" />
        <h1>Parminder Klair</h1>
        <p>senior web developer</p>
        <nav className="indigo">
            <div className="nav-wrapper">
                <a href="#" data-activates="mobile-demo" className="button-collapse">
                    <i className="mdi-navigation-menu"/>
                </a>
                <ul className="hide-on-med-and-down">
                    <li><a href="#">about me</a></li>
                    <li><a href="#">resume</a></li>
                    <li><a href="#">contact</a></li>
                    <li><a href="#">resources</a></li>
                </ul>
                <ul className="side-nav" id="mobile-demo">
                    <li><a href="#">about me</a></li>
                    <li><a href="#">resume</a></li>
                    <li><a href="#">contact</a></li>
                    <li><a href="#">resources</a></li>
                </ul>
            </div>
        </nav>
    </header>
);

export default Header;