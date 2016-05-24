import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';

import { Skills } from '../../../api/skills/skills.js';
import { Timeline } from '../../../api/timeline/timeline.js';

import ResumePage from '../pages/ResumePage.jsx';

export default createContainer(() => {
    Meteor.subscribe('skills');
    Meteor.subscribe('timeline');

    return {
        personalSkills: Skills.find({type: 'personal'}, {sort: {title: 1}}).fetch() || [],
        programmingSkills: Skills.find({type: 'programming'}, {sort: {title: 1}}).fetch() || [],
        timeline: Timeline.find({}, {sort: {event_time: -1}}).fetch() || []
    };
}, ResumePage);