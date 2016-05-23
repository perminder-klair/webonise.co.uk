import { Meteor } from 'meteor/meteor';
import React, { Component, PropTypes } from 'react';


class FunFacts extends Component {
    render() {
        return (
            <div className="container fade-in">
                <div className="section fun-facts">
                    <h2 className="header indigo-text lighten-1 section-title">
                        <span><i className="mdi-social-poll"/>Fun Facts</span>
                    </h2>

                    <div className="row">
                        <div className="col s12 m3">
                            <div className="card pink accent-3">
                                <div className="card-content white-text">
                                    <i className="fa fa-smile-o"/>
                                    <span className="card-title">mood here</span>
                                    <p className="bounceEffect">
                                        Current Mood
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col s12 m3">
                            <div className="card pink accent-3">
                                <a href="#modal1" className="modal-trigger">
                                    <div className="card-content white-text">
                                        <i className="fa fa-bar-chart"/>
                                        <span className="card-title">calories here</span>
                                        <p className="bounceEffect">
                                            Calories Burned
                                        </p>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div className="col s12 m3">
                            <div className="card pink accent-3">
                                <div className="card-content white-text">
                                    <i className="fa fa-clock-o"/>
                                    <span className="card-title">sleepTime here</span>
                                    <p className="bounceEffect">
                                        Sleep Time
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col s12 m3">
                            <div className="card pink accent-3">
                                <div className="card-content white-text">
                                    <i className="fa fa-glass"/>
                                    <span className="card-title">drinks here</span>
                                    <p className="bounceEffect">
                                        Drinks Consumed
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col s12 m3">
                            <div className="card pink accent-3">
                                <div className="card-content white-text">
                                    <i className="fa fa-heart text-red accent-4 heartEffect"/>
                                    <span className="card-title">heartBeat here</span>
                                    <p className="bounceEffect">
                                        Heart Beat
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col s12 m3">
                            <div className="card pink accent-3">
                                <div className="card-content white-text">
                                    <i className="fa fa-tachometer"/>
                                    <span className="card-title">steps here</span>
                                    <p className="bounceEffect">
                                        Steps Walk
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col s12 m3">
                            <div className="card pink accent-3">
                                <a href="{{pathFor 'moves'}}">
                                    <div className="card-content white-text">
                                        <i className="fa fa-location-arrow"/>
                                        <span className="card-title">currentLocation here</span>
                                        <p className="bounceEffect">
                                            Current Location
                                        </p>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div className="col s12 m3">
                            <div className="card pink accent-3">
                                <div className="card-content white-text">
                                    <i className="fa fa-github-alt"/>
                                    <span className="card-title">repos here</span>
                                    <p className="bounceEffect">
                                        Git Repos
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default FunFacts;