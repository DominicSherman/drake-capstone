import React, {Component} from 'react';

import FriendsProgressBar from '../graphs/FriendsProgressBar';
import {FACEBOOK} from '../constants/analytic-types';
import LikesAndComments from '../graphs/LikesAndComments';

export default class FacebookAnalytics extends Component {
    render() {
        return (
            <div>
                <LikesAndComments
                    platform={FACEBOOK}
                    {...this.props}
                />
                <FriendsProgressBar
                    platform={FACEBOOK}
                    {...this.props}
                />
            </div>
        );
    }
}
