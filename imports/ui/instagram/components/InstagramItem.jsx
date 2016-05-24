import React from 'react';
import { FlowRouter } from 'meteor/kadira:flow-router';
import moment from 'moment';

const InstagramItem = ({image}) => (
    <img src={image.images.standard_resolution.url} className="responsive-img materialboxed" data-caption={image.caption ? image.caption.text : 'image'} />
);

export default InstagramItem;