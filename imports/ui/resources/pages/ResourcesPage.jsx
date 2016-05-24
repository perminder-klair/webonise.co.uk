import { Meteor } from 'meteor/meteor';
import React, { Component, PropTypes } from 'react';
import moment from 'moment';

class ResourcesPage extends Component {
    componentDidMount() {
        $('.fade-in').velocity("fadeIn", { duration: 500 });
    }

    renderResources() {
        return this.props.resources.map((resource) => {
            return (
                <div className="col s12 m12" key={resource._id}>
                    <div className="card-panel">
                        <a href={resource.url} target="_blank">
                            <h4 className="heading indigo-text lighten-4">
                                {resource.title}
                                <span class="grey-text text-lighten-2">
                                    {moment(resource.created).format('MMM D, YYYY')}
                                </span>
                            </h4>
                        </a>
                    </div>
                </div>
            )
        })
    }

    loadMore() {
        FlowRouter.setQueryParams({limit: this.props.limit + Meteor.settings.public.limit})
    }

    render() {
        console.log(this.props.resources);
        return (
            <span>
                <div className="section fade-in" id="index-banner">
                    <div className="container">
                        <div className="row center">
                            <div className="col s12 m12">
                                <h2 className="header indigo-text lighten-1 section-title">
                                    <span><i className="mdi-notification-event-note"/>Latest Resources</span>
                                </h2>
                                <p className="flow-text">
                                    Web design is the creation of <strong className="indigo-text lighten-1">digital environments</strong>, that <strong>facilitate</strong> and encourage human activity; <strong>reflect</strong> or adapt to individual voices and content.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container fade-in">
                    <div className="section resources">
                        <div className="row">
                            {this.renderResources()}
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

ResourcesPage.propTypes = {
    resources: PropTypes.array.isRequired,
    limit: PropTypes.number.isRequired
};

export default ResourcesPage;
