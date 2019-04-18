import React, {Component} from 'react';

import FollowerRatio from '../graphs/FollowerRatio';
import {TWITTER} from '../constants/analytic-types';
import FriendsProgressBar from "../graphs/FriendsProgressBar";

export default class TwitterAnalytics extends Component {
    render() {
        return (
            <div>
                <FollowerRatio
                    platform={TWITTER}
                    {...this.props}
                />
                <FriendsProgressBar
                    platform = {TWITTER}
                    {...this.props}
                />
            </div>
        );
    }
}
