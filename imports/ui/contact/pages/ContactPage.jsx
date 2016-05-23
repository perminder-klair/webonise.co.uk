import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';

class ContactPage extends Component {
    //handleSubmit(event) {
    //    event.preventDefault();
    //
    //    // Find the text field via the React ref
    //    const text = ReactDOM.findDOMNode(this.refs.textInput).value.trim();
    //
    //    Meteor.call('links.insert', text);
    //
    //    // Clear form
    //    ReactDOM.findDOMNode(this.refs.textInput).value = '';
    //}


    componentDidMount() {
        $('.fade-in').velocity("fadeIn", { duration: 500 });
    }

    render() {
        return (
            <span>
                <div className="section fade-in" id="index-banner">
                    <div className="container">
                        <div className="row center">
                            <div className="col s12 m12">
                                <h2 className="header indigo-text lighten-1 section-title">
                                    <span><i className="mdi-communication-email"/>Let's Get In Touch</span>
                                </h2>
                                <p className="flow-text">
                                    Use the <strong>contact form</strong> below to get in touch, I will reply as soon as possible and don't be afraid to just send me a <strong className="indigo-text lighten-1">"Hi!"</strong>. I look forward to <strong>hearing</strong> from you!
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container fade-in">
                    <div className="section resources">
                        <div className="row">
                            <div className="col s12 m4">
                                <p>
                                    Do you need a website, have a question or comment? Please feel free to send me an email or fill in this handy contact form. My aim is to reply within 24 hours.
                                </p>
                                <p>
                                    T: <a href="https://www.twitter.com/pinku1" className="pink-text accent-2">@pinku1</a><br/>
                                    E: <a href="mailto:gmail@klair.us" className="pink-text accent-2">gmail@klair.us</a><br/>
                                    P: <a href="tel:+447411911347" className="pink-text accent-2">+44 7411911347</a>
                                </p>
                            </div>
                            <div className="col s12 m8 indigo-text">
                                ---contact form here---
                            </div>
                        </div>
                    </div>
                </div>
            </span>
        )
    }
}

ContactPage.propTypes = {};

export default ContactPage;
