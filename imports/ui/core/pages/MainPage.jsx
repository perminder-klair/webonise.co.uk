import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';

import { Links } from '../../../api/links/links.js';

import Link from '../../links/components/Link.jsx';
import AccountsUIWrapper from '../layouts/AccountsUIWrapper.jsx';

// App component - represents the whole app
class MainPage extends Component {
    handleSubmit(event) {
        event.preventDefault();

        // Find the text field via the React ref
        const text = ReactDOM.findDOMNode(this.refs.textInput).value.trim();

        Meteor.call('links.insert', text);

        // Clear form
        ReactDOM.findDOMNode(this.refs.textInput).value = '';
    }

    renderLinks() {
        return this.props.links.map((link) => (
            <Link key={link._id} link={link} />
        ));
    }

    render() {
        return (
            <div className="ui container">
                <header>
                    <h1>Links List</h1>
                    <AccountsUIWrapper />
                    <form className="new-link" onSubmit={this.handleSubmit.bind(this)} >
                        <input
                            type="text"
                            ref="textInput"
                            placeholder="Type link URL"
                        />
                    </form>
                </header>

                <ul>
                    {this.renderLinks()}
                </ul>
            </div>
        );
    }
}

MainPage.propTypes = {
    links: PropTypes.array.isRequired
};

export default createContainer(() => {
    Meteor.subscribe('links');

    return {
        links: Links.find({}).fetch(),
        currentUser: Meteor.user()
    };
}, MainPage);
