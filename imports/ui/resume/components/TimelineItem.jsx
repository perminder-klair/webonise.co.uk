import { Meteor } from 'meteor/meteor';
import React, { Component, PropTypes } from 'react';
import moment from 'moment';
import classnames from 'classnames';

class TimelineItem extends Component {
    render() {
        let time = moment(this.props.item.event_time).format('MMMM YYYY');
        let icon = !_.isUndefined(this.icon) ? this.props.item.icon : 'fa-globe';

        return (
            <li>
                <time className="cbp_tmtime" datetime={this.props.item.dateTime}>
                    <span>{time}</span>
                    <span></span>
                </time>
                <div className={`cbp_tmicon fa ${icon}`}></div>
                <div className="cbp_tmlabel z-depth-2">
                    <h2>{this.props.item.title}</h2>
                    <p className="light-text">{this.props.item.short_description}</p>
                    <p className="light-text">{this.props.item.description}</p>
                </div>
            </li>
        )
    }
}

TimelineItem.propTypes = {
    item: PropTypes.object.isRequired
};

export default TimelineItem;
