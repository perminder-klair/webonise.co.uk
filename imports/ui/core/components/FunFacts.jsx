import { Meteor } from 'meteor/meteor';
import React, { Component, PropTypes } from 'react';


class FunFacts extends Component {
    currentLocation() {
        return 'N/A';
    }

    heartBeat() {
        //todo, getting random now :D
        var items = [78, 90, 85, 101, 88, 76, 92, 91];
        return items[Math.floor(Math.random() * items.length)];
    }

    gitRepos() {
        //todo!!!
        return 0
    }

    mood() {
        //todo!!!
        return 'Good';
    }

    calories() {
        //todo!!!
        return 1500;
    }

    sleepTime() {
        //todo!!!
        return '8 hours';
    }

    drinksCount() {
        //todo!!!
        return 5;
    }

    stepsCount() {
        //todo!!!
        return 8402;
    }

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
                                    <span className="card-title">{this.mood()}</span>
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
                                        <span className="card-title">{this.calories()}</span>
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
                                    <span className="card-title">{this.sleepTime()}</span>
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
                                    <span className="card-title">{this.drinksCount()}</span>
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
                                    <span className="card-title">{this.heartBeat()}</span>
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
                                    <span className="card-title">{this.stepsCount()}</span>
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
                                        <span className="card-title">{this.currentLocation()}</span>
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
                                    <span className="card-title">{this.gitRepos()}</span>
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

FunFacts.propTypes = {
    diet: PropTypes.object.isRequired
};

export default FunFacts;