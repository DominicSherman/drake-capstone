import React, {Component} from 'react';

import InstagramLikesAndComments from '../graphs/InstagramLikesAndComments';
import FollowerRatio from '../graphs/FollowerRatio';
import {INSTAGRAM} from '../constants/analytic-types';

export default class InstagramAnalytics extends Component {
    render() {
        return (
            <div>
                <InstagramLikesAndComments {...this.props} />
                <FollowerRatio
                    platform={INSTAGRAM}
                    {...this.props}
                />
            </div>
        );
    }
}
