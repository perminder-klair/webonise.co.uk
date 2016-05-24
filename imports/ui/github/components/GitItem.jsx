import React from 'react';
import { FlowRouter } from 'meteor/kadira:flow-router';
import moment from 'moment';

const GitItem = ({git}) => (
    <div className="card indigo">
        <div className="card-content white-text">
            <span className="card-title">
                 <a href={git.html_url} target="_blank">{git.name}</a>
            </span>

            <div className="repo-icons">
                <a href={`${git.html_url}/fork`} target="_blank">
                    <i className="fa fa-random"/> {git.forks_count}
                </a>
                <a href={`${git.html_url}/stargazers`} target="_blank">
                    <i className="fa fa-star"/> {git.stargazers_count}
                </a>
                <a href={`${git.html_url}/watchers`} target="_blank">
                    <i className="fa fa-eye"/> {git.watchers_count}
                </a>
            </div>

            <p>{git.description}</p>
        </div>
        <div className="card-action">
            <span className="updated-on">Updated on {moment(git.updated_at).format('MMMM D, YYYY')}</span>
        </div>
    </div>
);

export default GitItem;