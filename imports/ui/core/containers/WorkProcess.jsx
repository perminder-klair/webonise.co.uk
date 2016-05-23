import { Meteor } from 'meteor/meteor';
import React, { Component } from 'react';

const WorkProcess = () => (
    <div className="container fade-in">
        <div className="section processes-container">
            <h2 className="header indigo-text lighten-1 section-title">
                <span><i className="mdi-action-cached"/>Work Process</span>
            </h2>
            <div className="row">
                <div className="col s12 m4">
                    <div className="card small">
                        <div className="card-image">
                            <img src="/images/philosophy.png" />
                            <span className="card-title">My Philosophy</span>
                        </div>
                        <div className="card-content">
                            <p>
                                I always focusing on the performance and My goal is to create user-friendly and timeless websites that attract human eyes.
                            </p>
                            <p>
                                Reading and trying out new ideas is how I have furthered my knowledge, keeping up to date with the latest technologies.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col s12 m4">
                    <div className="card small">
                        <div className="card-image">
                            <img src="/images/mission.jpg" />
                            <span className="card-title">My Mission</span>
                        </div>
                        <div className="card-content">
                            <p>
                                I am highly motivated, enthusiastic and a very reliable developer with a 'can do' attitude. I am always looking to increase my knowledge and learn new technologies and skills.
                            </p>
                            <p>I love developing cross-platform iOS and Android applications.</p>
                        </div>
                    </div>
                </div>
                <div className="col s12 m4">
                    <div className="card small">
                        <div className="card-image">
                            <img src="/images/process.jpg" />
                            <span className="card-title">My Process</span>
                        </div>
                        <div className="card-content">
                            <p>
                                When I undertake a project, I don't just complete it, I go the extra mile and make it better than requested.
                            </p>
                            <ul>
                                <li className="collection-item">Planning</li>
                                <li className="collection-item">Design</li>
                                <li className="collection-item">Data Architecture</li>
                                <li className="collection-item">Development</li>
                                <li className="collection-item">Launch & Support</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
);

export default WorkProcess;