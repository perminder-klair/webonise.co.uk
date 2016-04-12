import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';

export default class Link extends Component {
    render() {
        return (
            <li>{this.props.link.url}</li>
        );
    }
}

Link.propTypes = {
    link: PropTypes.object.isRequired
};
