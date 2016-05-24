import { Meteor } from 'meteor/meteor';
import React, { Component, PropTypes } from 'react';

import TimelineItem from '../components/TimelineItem.jsx';

class ResumePage extends Component {
    componentDidMount() {
        $('.fade-in').velocity("fadeIn", { duration: 500 });

        setTimeout(function() {
            //timeline
            var timelineBlock = $('.cd-timeline-block');

            //hide timeline blocks which are outside the viewport
            timelineBlock.each(function(){
                if($(this).offset().top > $(window).scrollTop()+$(window).height()*0.75) {
                    $(this).find('.cd-timeline-img, .cd-timeline-content').addClass('is-hidden');
                }
            });

            //on scolling, show/animate timeline blocks when enter the viewport
            $(window).on('scroll', function () {
                timelineBlock.each(function () {
                    if ($(this).offset().top <= $(window).scrollTop() + $(window).height() * 0.75 && $(this).find('.cd-timeline-img').hasClass('is-hidden')) {
                        $(this).find('.cd-timeline-img, .cd-timeline-content').removeClass('is-hidden').addClass('bounce-in');
                    }
                });
            });
        }, 400);
    }

    render() {
        console.log(this.props.timeline);
        return (
            <span>
                <div className="section fade-in" id="index-banner">
                    <div className="container">
                        <div className="row center">
                            <div className="col s12 m12">
                                <h2 className="header indigo-text lighten-1 section-title">
                                    <span>
                                        <i className="mdi-action-account-circle"/> All About Me
                                    </span>
                                </h2>

                                <p className="flow-text">
                                    Welcome to my timeline. My <strong className="indigo-text lighten-1">work experience</strong> and <strong className="indigo-text lighten-1">education</strong> details are almost explained here. Take a moment to <strong>check out</strong>!
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="section resources">
                        <div className="row">
                            <div className="col s12 m4">
                                <h2 className="header indigo-text lighten-1 section-title">
                                    <span><i className="mdi-editor-insert-drive-file"/>Download My CV</span>
                                </h2>
                                <p>
                                    You can download my CV in pdf format if you like. I create usable web interfaces, front and back end coding stuff and almost anything. But i love what i do.
                                </p>
                                <a className="waves-effect waves-light indigo btn-large" href="https://docs.google.com/file/d/0B8iWG4AtNctDYWNHbXNvZTdhUVE/edit?usp=sharing">Download CV</a>

                                <h2 className="header indigo-text lighten-1 section-title">
                                    <span><i className="fa fa-linkedin"/>LINKEDIN PROFILE</span>
                                </h2>
                                <p>
                                    You can view my LinkedIn profile.
                                </p>
                                <a className="waves-effect waves-light btn-large" href="http://www.linkedin.com/profile/view?id=138209855">My LinkedIn Profile</a>

                                <h2 className="header indigo-text lighten-1 section-title">
                                    <span><i className="mdi-action-settings"/>Programming Skills</span>
                                </h2>
                                <p>
                                    Man behind the gun, any sophisticated weapons. Human remains that taking the role. We are experienced in utilizing all resources, for best results and perfect quality.
                                </p>
                                <div className="skills">
                                    {this.props.programmingSkills.map((item) => {
                                        return (
                                            <a
                                                key={item._id}
                                                className="waves-effect waves-light btn indigo"
                                                style={{marginRight: '5px', marginBottom: '5px'}}>
                                                {item.title}
                                            </a>
                                        )
                                    })}
                                </div>
                                <h2 className="header indigo-text lighten-1 section-title">
                                    <span><i className="mdi-action-grade"/>Personal Skills</span>
                                </h2>
                                <div className="skills">
                                    {this.props.personalSkills.map((item) => {
                                        return (
                                            <a
                                                key={item._id}
                                                className="waves-effect waves-light btn indigo lighten-1"
                                                style={{marginRight: '5px', marginBottom: '5px'}}>
                                                {item.title}
                                            </a>
                                        )
                                    })}
                                </div>
                            </div>
                            <div className="col s12 m8">
                                <h2 className="header indigo-text lighten-1 section-title">
                                    <span><i className="mdi-social-school"/>When Where What</span>
                                </h2>
                                <ul className="cbp_tmtimeline">
                                    {this.props.timeline.map((item) => <TimelineItem key={item._id} item={item}/>)}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </span>
        )
    }
}

ResumePage.propTypes = {
    personalSkills: PropTypes.array.isRequired,
    programmingSkills: PropTypes.array.isRequired,
    timeline: PropTypes.array.isRequired
};

export default ResumePage;
