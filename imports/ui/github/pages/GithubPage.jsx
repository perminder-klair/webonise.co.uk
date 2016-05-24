import { Meteor } from 'meteor/meteor';
import React, { Component, PropTypes } from 'react';

import GitItem from '../components/GitItem.jsx';

class GithubPage extends Component {
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
                                    <span><i className="fa fa-github"/> Github Repositories</span>
                                </h2>

                                <p className="flow-text">
                                    My all <strong>open-source code</strong> shared on Github. Feel free to re-use, <strong className="indigo-text lighten-1">fork</strong> and collaborate!
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container fade-in">
                    <div className="section featured-media">
                        <div className="row">
                            {this.props.github.map((git) => {
                                return (
                                    <div key={git._id} className="col s4">
                                        <GitItem git={git} />
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </span>
        )
    }
}

GithubPage.propTypes = {
    github: PropTypes.array.isRequired
};

export default GithubPage;
