//Description: A progress bar component, showing a target goal of followers or friends a user should aim for.
//             Uses react ProgressBar bootstrap and an analytics helper function, can be applied to all analytics screens.

import React, {Component} from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar';

import {getFriendsOrFollowers} from '../utils/analytics-helpers';

export default class FriendsProgressBar extends Component {
    render() {
        const {platform} = this.props;
        const user = this.props[`${platform.toLowerCase()}User`];

        if (!Object.keys(user).length || user.error) {
            return null;
        }

        const friends_count = getFriendsOrFollowers(platform, user);
        const friends_goal = Math.round(friends_count * 1.25);
        const now = Math.round(friends_count / friends_goal * 100);

        return (
            <div>
                <h2>{`${platform} Friends Progress Bar`}</h2>
                <h4>{`Current Friends: ${friends_count}     Target Friends Goal: ${friends_goal}`}</h4>
                <ProgressBar
                    animated
                    now={now}
                />
            </div>
        );
    }
}
