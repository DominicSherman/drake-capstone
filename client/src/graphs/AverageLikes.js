import React, {Component} from 'react';
import moment from 'moment';
import {Bar} from 'react-chartjs-2';

import {blue, red} from '../constants/colors';
import {average} from 'Math';
export default class AverageLikesPlatforms extends Component {
    render() {
        const {instagramMedia} = this.props;

        if (!instagramMedia.length) {
            return null;
        }

        var avg = ()
        const sortedMedia = [...instagramMedia].reverse();
        const likesData = sortedMedia.map((post) => ({
            x: 'Average Number Likes',
            y: post.likes.count
        }));

        const commentData = sortedMedia.map((post) => ({
            x: 'Average Number Comments',
            y: post.comments.count
        }));

        const average = arr => arr.reduce( ( p, c ) => p + c, 0 ) / arr.length;
        const averageLikes = average(likesData);
        const averageComments = average(commentData)

        const barChartLabels = sortedMedia.map((post) => moment.unix(Number(post.created_time)).format('MMM-D-Y'));
        const data = {
            datasets: [
                {
                    backgroundColor: `${red}20`,
                    borderColor: red,
                    borderWidth: 1,
                    data: averageLikes,
                    hoverBackgroundColor: `${red}40`,
                    hoverBorderColor: red,
                    label: 'Likes'
                },
                {
                    backgroundColor: `${blue}20`,
                    borderColor: blue,
                    borderWidth: 1,
                    data: averageComments,
                    hoverBackgroundColor: `${blue}40`,
                    hoverBorderColor: blue,
                    label: 'Comments'
                }
            ],
            labels: barChartLabels
        };

        return (
            <div>
                <h2>{'Instagram Likes Over Time'}</h2>
                <Bar
                    data={data}
                    height={500}
                    width={window.innerWidth}
                />
            </div>
        );
    }
}
