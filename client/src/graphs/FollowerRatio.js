import React, {Component} from 'react';
import {Doughnut} from 'react-chartjs-2';

import {blue, red} from '../constants/colors';
import {followersColumn, followingColumn} from '../utils/analytics-helpers';

export default class FollowerRatio extends Component {
    render() {
        const {platform} = this.props;
        const user = this.props[`${platform.toLowerCase()}User`];

        if (!Object.keys(user).length) {
            return null;
        }

        const followers = user[followersColumn[platform]];
        const following = user[followingColumn[platform]];

        const data = {
            datasets: [{
                backgroundColor: [`${red}20`, `${blue}20`],
                borderColor: [red, blue],
                borderWidth: 1,
                data: [followers, following],
                hoverBackgroundColor: [`${red}40`, `${blue}20`],
                hoverBorderColor: [red, blue]
            }],
            labels: ['Followers', 'Following']
        };

        return (
            <div>
                <h2>{`${platform} Follower Ratio`}</h2>
                <Doughnut
                    data={data}
                    height={500}
                    width={window.innerWidth}
                />
            </div>
        );
    }
}
