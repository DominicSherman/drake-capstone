import React, {Component} from 'react';
import {Bar} from 'react-chartjs-2';

import {blue, lightBlue, violet, red} from '../constants/colors';

export default class TotalPosts extends Component {
    render() {
        const {facebookUser, instagramUser, twitterUser} = this.props;

        if (!Object.keys(facebookUser).length || !Object.keys(instagramUser).length || !Object.keys(twitterUser).length) {
            return null;
        }

        const insta_post_count = instagramUser.media_count;
        const twitter_post_count = twitterUser.statuses_count;

        const data = {
            datasets: [
                {
                    backgroundColor: [`${blue}20`, `${red}20`],
                    borderColor: [blue, red],
                    borderWidth: 1,
                    data: [insta_post_count, twitter_post_count],
                    hoverBackgroundColor: [`${blue}40`, `${red}40`],
                    hoverBorderColor: [blue, red]
                }
            ],
            labels: [
                'Instagram Posts',
                'Twitter Posts'
            ]
        };

        return (
            <div>
                <h2>{'Total Posts'}</h2>
                <Bar
                    data={data}
                    height={500}
                    width={window.innerWidth}
                />
            </div>
        );
    }
}