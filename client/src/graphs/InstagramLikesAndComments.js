import React, {Component} from 'react';
import moment from 'moment';
import {Bar} from 'react-chartjs-2';

import {blue, red} from '../constants/colors';

export default class InstagramLikesAndComments extends Component {
    render() {
        const {instagramMedia} = this.props;

        if (!instagramMedia.length) {
            return null;
        }

        const sortedMedia = instagramMedia.reverse();
        const likesData = sortedMedia.map((post) => ({
            x: post.created_time,
            y: post.likes.count
        }));
        const commentData = sortedMedia.map((post) => ({
            x: post.created_time,
            y: post.comments.count
        }));
        const barChartLabels = sortedMedia.map((post) => moment.unix(Number(post.created_time)).format('MMM-D-Y'));
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
