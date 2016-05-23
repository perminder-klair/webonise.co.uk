import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';

import { Skills } from '../../../api/skills/skills.js';
import { Timeline } from '../../../api/timeline/timeline.js';

import ResumePage from '../pages/ResumePage.jsx';

export default createContainer(() => {
    Meteor.subscribe('skills');
    Meteor.subscribe('timeline');

    return {
        skills: Skills.find({}, {sort: {title: 1}}).fetch() || [],
        timeline: Timeline.find({}, {sort: {event_time: -1}}).fetch() || []
    };
}, ResumePage);