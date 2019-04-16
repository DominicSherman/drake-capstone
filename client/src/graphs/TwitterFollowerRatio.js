import React, {Component} from 'react';
import {Doughnut} from 'react-chartjs-2';

import {blue, red} from '../constants/colors';

export default class TwitterFollowerRatio extends Component {
    render() {
        const {twitterUser} = this.props;

        if (!twitterUser) {
            return null;
        }

        const friends_count = twitterUser.friends_count;
        const followers_count = twitterUser.followers_count;

        const data = {
            datasets: [
                {
                    backgroundColor: [`${red}20`, `${blue}20`],
                    borderColor: [red, blue],
                    borderWidth: 1,
                    data: [followers_count, friends_count],
                    hoverBackgroundColor: [`${red}40`, `${blue}20`],
                    hoverBorderColor: [red, blue]
                }
            ],
            labels: [
                'Followers',
                'Following'
            ]
        };

        return (
            <div>
                <h2>{'Twitter Follower Ratio'}</h2>
                <Doughnut
                    data={data}
                    height={500}
                    width={window.innerWidth}
                />
            </div>
        );
    }
}
