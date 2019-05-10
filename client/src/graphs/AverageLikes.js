import React, {Component} from 'react';
import {Bar} from 'react-chartjs-2';

import {blue, red, seaFoam} from '../constants/colors';
import {getLikes} from '../utils/analytics-helpers';
import {FACEBOOK, INSTAGRAM, TWITTER} from '../constants/analytic-types';

const getAvg = (array) => {
    const total = array.reduce((acc, c) => acc + c, 0);

    return total / array.length;
};

export default class AverageLikesPlatforms extends Component {
    render() {
        const {facebookMedia, instagramMedia, twitterMedia} = this.props;

        if (!Object.keys(facebookMedia).length || !Object.keys(instagramMedia).length || !Object.keys(twitterMedia).length) {
            return null;
        }

        const instagramAverage = getAvg(instagramMedia.map((post) => getLikes(INSTAGRAM, post)));
        const twitterAverage = getAvg(twitterMedia.map((post) => getLikes(TWITTER, post)));
        const facebookAverage = !facebookMedia.error ? getAvg(facebookMedia.map((post) => getLikes(FACEBOOK, post))) : 0;

        const averageLikeData = [
            instagramAverage,
            twitterAverage,
            facebookAverage
        ];

        const data = {
            datasets: [
                {
                    backgroundColor: [
                        `${red}20`,
                        `${seaFoam}20`,
                        `${blue}20`

                    ],
                    borderColor: [
                        red,
                        seaFoam,
                        blue
                    ],
                    borderWidth: 1,
                    data: averageLikeData,
                    hoverBackgroundColor: [
                        `${red}40`,
                        `${seaFoam}40`,
                        `${blue}40`
                    ],
                    hoverBorderColor: [
                        red,
                        seaFoam,
                        blue
                    ],
                    label: 'Average Likes'
                }
            ],
            labels: ['Instagram', 'Twitter', 'Facebook']
        };

        return (
            <div>
                <h2>{'Average Likes By Platform'}</h2>
                <Bar
                    data={data}
                    height={500}
                    width={window.innerWidth}
                />
            </div>
        );
    }
}
