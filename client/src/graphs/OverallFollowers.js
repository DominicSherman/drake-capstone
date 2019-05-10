import React, {Component} from 'react';
import {Pie} from 'react-chartjs-2';

import {blue, lightBlue, violet} from '../constants/colors';

export default class OverallFollowers extends Component {
    render() {
        const {facebookUser, instagramUser, twitterUser} = this.props;

        if (!Object.keys(facebookUser).length || !Object.keys(instagramUser).length || !Object.keys(twitterUser).length) {
            return null;
        }

        const facebook_friend_count = facebookUser.error ? 0 : facebookUser.friends.summary.total_count;
        const insta_follower_count = instagramUser.follower_count;
        const twitter_follower_count = twitterUser.followers_count;

        const data = {
            datasets: [
                {
                    backgroundColor: [`${blue}20`, `${violet}20`, `${lightBlue}20`],
                    borderColor: [blue, violet, lightBlue],
                    borderWidth: 1,
                    data: [facebook_friend_count, insta_follower_count, twitter_follower_count],
                    hoverBackgroundColor: [`${blue}40`, `${violet}20`, `\`${lightBlue}20\``],
                    hoverBorderColor: [blue, violet, lightBlue]
                }
            ],
            labels: [
                'Facebook Friends',
                'Instagram Followers',
                'Twitter Followers'
            ]
        };

        return (
            <div>
                <h2>{'Friends/Followers'}</h2>
                <Pie
                    data={data}
                    height={500}
                    width={window.innerWidth}
                />
            </div>
        );
    }
}
