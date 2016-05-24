import React from 'react';
import { FlowRouter } from 'meteor/kadira:flow-router';
import moment from 'moment';

const FlickrItem = ({image}) => (
    <img
        src={image.url}
        className="responsive-img materialboxed"
        data-caption={image.title} />
);

export default FlickrItem;