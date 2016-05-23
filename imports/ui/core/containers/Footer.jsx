import React, { Component } from 'react';

const Footer = () => (
    <footer className="indigo z-depth-1">
        <div className="container">
            <div className="row get-in-touch">
                <div className="col l12 s12">
                    <h5 className="white-text">LET'S SOCIALIZE</h5>
                    <p className="grey-text text-lighten-4">
                        I'm very social and I'd love to hear from you! Feel free to send me an email, find me on Google
                        Plus, follow me on Twitter and join me on Facebook.
                    </p>
                    <div className="follow_us">
                        <a href="https://www.twitter.com/pinku1" target="_blank">
                            <i className="fa fa-twitter"/>
                        </a>
                        <a href="https://www.facebook.com/klair.us" target="_blank">
                            <i className="fa fa-facebook"/>
                        </a>
                        <a href="http://www.linkedin.com/profile/view?id=138209855" target="_blank">
                            <i className="fa fa-linkedin"/>
                        </a>
                        <a href="https://plus.google.com/105222657389911753474/posts" target="_blank">
                            <i className="fa fa-google-plus"/>
                        </a>
                        <a href="https://github.com/perminder-klair" target="_blank">
                            <i className="fa fa-github"/>
                        </a>
                        <a href="https://www.flickr.com/photos/133091320@N03/" target="_blank">
                            <i className="fa fa-flickr"/>
                        </a>
                    </div>
                </div>
            </div>
        </div>
        <div className="footer-copyright indigo darken-2">
            <div className="container">
                Webonise.co.uk © 2015 - All Rights Reserved : This site has been <a href="http://www.webonise.co.uk">Webonised</a>.
            </div>
        </div>
    </footer>
);

export default Footer;