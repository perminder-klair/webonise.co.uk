import React from 'react';
import { FlowRouter } from 'meteor/kadira:flow-router';

const NotFoundPage = () => (
    <div className="container">
        <div className="section">
            <div className="row">
                <div className="col s12 m12">
                    <p>
                        Seems like this site doesn't exist<br />
                        <a href={FlowRouter.path('main')}>Go to home</a>
                    </p>
                </div>
            </div>
        </div>
    </div>
);

export default NotFoundPage;