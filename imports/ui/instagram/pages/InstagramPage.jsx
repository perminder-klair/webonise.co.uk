import { Meteor } from 'meteor/meteor';
import React, { Component, PropTypes } from 'react';

import InstagramItem from '../components/InstagramItem.jsx';

class InstagramPage extends Component {
    componentDidMount() {
        $('.fade-in').velocity("fadeIn", { duration: 500 });
        $('.materialboxed').materialbox();
    }

    componentDidUpdate() {
        $('.materialboxed').materialbox();
    }

    loadMore() {
        FlowRouter.setQueryParams({limit: this.props.limit + Meteor.settings.public.limit})
    }

    render() {
        return (
            <span>
                <div className="section fade-in" id="index-banner">
                    <div className="container">
                        <div className="row center">
                            <div className="col s12 m12">
                                <h2 className="header indigo-text lighten-1 section-title">
                                    <span><i className="fa fa-instagram"/> Latest Instagram Pictures</span>
                                </h2>

                                <p className="flow-text">
                                    My insta pictures <br />
                                    I capture moments / <strong className="indigo-text lighten-1">happiness</strong> / <strong>emotions</strong> / <strong className="indigo-text lighten-1">impression</strong>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container fade-in">
                    <div className="section featured-media">
                        <div className="row">
                            {this.props.instagram.map((image) => {
                                return (
                                    <div key={image._id} className="col s3">
                                        <InstagramItem image={image} />
                                    </div>
                                )
                            })}
                        </div>
                        <div className="row center">
                            <button
                                className="load-more btn-large waves-effect waves-light pink accent-2"
                                onClick={() => this.loadMore()}>
                                Load more
                            </button>
                        </div>
                    </div>
                </div>
            </span>
        )
    }
}

InstagramPage.propTypes = {
    instagram: PropTypes.array.isRequired,
    limit: PropTypes.number.isRequired
};

export default InstagramPage;
