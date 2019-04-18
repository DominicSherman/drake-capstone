import React, {Component} from 'react';
import FriendsProgressBar from "../graphs/FriendsProgressBar";
import {FACEBOOK, INSTAGRAM} from "../constants/analytic-types";

export default class FacebookAnalytics extends Component {
    render() {
        const {facebookUser} = this.props;

        console.log('facebookUser', facebookUser);

        return (
            <div>
                <FriendsProgressBar
                    platform = {FACEBOOK}
                    {...this.props}
                />
            </div>
        );
    }
}
