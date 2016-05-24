import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';

import { Github } from '../../../api/github/github.js';

import GithubPage from '../pages/GithubPage.jsx';

export default createContainer(() => {
    Meteor.subscribe('github', 200);

    return {
        github: Github.find({}, {sort: {updated_at: -1}}).fetch() || []
    };
}, GithubPage);