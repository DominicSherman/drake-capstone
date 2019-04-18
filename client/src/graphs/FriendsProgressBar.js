import React, {Component} from 'react';
import ProgressBar from "react-bootstrap/ProgressBar";
import {friendsColumn} from '../utils/analytics-helpers';

export default class FriendsProgressBar extends Component {
    render() {
        const {platform} = this.props;
        const user = this.props[`${platform.toLowerCase()}User`];

        if (!Object.keys(user).length) {
            return null;
        }

        const friends_count = user[friendsColumn[platform]];

        const friends_goal = Math.round(friends_count*1.25);
        const now = Math.round((friends_count/friends_goal)*100);

        return (
            <div>
                <h2>{`${platform} Friends Progress Bar`}</h2>
                <h4>{`Current Friends: ${friends_count}     Friends Goal: ${friends_goal}`}</h4>
                <ProgressBar animated now={now}/>
            </div>
        );
    }
}