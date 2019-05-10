import React, {Component} from 'react';
import moment from 'moment';
import {Bar} from 'react-chartjs-2';

import {blue, red} from '../constants/colors';
import {getComments, getLikes, secondaryColumnName, timestampColumn} from '../utils/analytics-helpers';
import {INSTAGRAM} from '../constants/analytic-types';

export default class LikesAndComments extends Component {
    render() {
        const {platform} = this.props;
        const media = this.props[`${platform.toLowerCase()}Media`];

        if (!media.length) {
            return null;
        }

        console.log('media', media);

        const sortedMedia = [...media].reverse();
        const likesData = sortedMedia.map((post) => ({
            x: post[timestampColumn[platform]],
            y: getLikes(platform, post)
        }));
        const commentData = sortedMedia.map((post) => ({
            x: post[timestampColumn[platform]],
            y: getComments(platform, post)
        }));
        const barChartLabels = sortedMedia.map((post) => platform === INSTAGRAM ?
            moment.unix(Number(post.created_time)).format('MMM-D-Y')
            :
            post[timestampColumn[platform]]
        );

        const data = {
            datasets: [
                {
                    backgroundColor: `${red}20`,
                    borderColor: red,
                    borderWidth: 1,
                    data: likesData,
                    hoverBackgroundColor: `${red}40`,
                    hoverBorderColor: red,
                    label: 'Likes'
                },
                {
                    backgroundColor: `${blue}20`,
                    borderColor: blue,
                    borderWidth: 1,
                    data: commentData,
                    hoverBackgroundColor: `${blue}40`,
                    hoverBorderColor: blue,
                    label: secondaryColumnName[platform]
                }
            ],
            labels: barChartLabels
        };

        return (
            <div>
                <h2>{`${platform} Likes And ${secondaryColumnName[platform]} Over Time`}</h2>
                <Bar
                    data={data}
                    height={500}
                    width={window.innerWidth}
                />
            </div>
        );
    }
}
