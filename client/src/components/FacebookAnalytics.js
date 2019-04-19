import React, {Component} from 'react';

import FriendsProgressBar from '../graphs/FriendsProgressBar';
import {FACEBOOK} from '../constants/analytic-types';

export default class FacebookAnalytics extends Component {
    render() {
        return (
            <div>
                <FriendsProgressBar
                    platform={FACEBOOK}
                    {...this.props}
                />
            </div>
        );
    }
}
