import { Meteor } from 'meteor/meteor';
import React, { Component, PropTypes } from 'react';
import moment from 'moment';

import TweetItem from '../components/TweetItem.jsx';

class TweetsPage extends Component {
    componentDidMount() {
        $('.fade-in').velocity("fadeIn", { duration: 500 });
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
                                    <span><i className="fa fa-twitter"/> Latest Tweets</span>
                                </h2>

                                <p className="flow-text">
                                    All <strong>Tweets</strong> and what is on my <strong className="indigo-text lighten-1">mind</strong>.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container fade-in">
                    <div className="section resources">
                        <div className="row">
                            {this.props.tweets.map((tweet) => {
                                return (
                                    <div className="col s4" key={tweet._id}>
                                        <TweetItem tweet={tweet} />
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

TweetsPage.propTypes = {
    tweets: PropTypes.array.isRequired,
    limit: PropTypes.number.isRequired
};

export default TweetsPage;
