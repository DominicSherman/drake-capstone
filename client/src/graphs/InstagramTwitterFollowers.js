import React, {Component} from 'react';
import {Pie} from 'react-chartjs-2';


import {blue, lightBlue, violet} from '../constants/colors';

export default class TwitterFollowerRatio extends Component {
    render() {
        const {facebookUser} = this.props;

        if (!facebookUser.id) {
            return null;
        }

        const {instagramUser} = this.props;

        if (!instagramUser.id) {
            return null;
        }

        const {twitterUser} = this.props;

        if (!twitterUser.id) {
            return null;
        }

        const facebook_friend_count = facebookUser.friends.summary.total_count;
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
                <h2>{'Facebook Friends and Instagram/Twitter Followers'}</h2>
                <Pie
                    data={data}
                    height={500}
                    width={window.innerWidth}
                />
            </div>
        );
    }
}