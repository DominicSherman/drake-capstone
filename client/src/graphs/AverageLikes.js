//Graph object, average likes or favorites across each platform
import React, {Component} from 'react';
import moment from 'moment';
import {Bar} from 'react-chartjs-2';

import {blue, red, violet} from '../constants/colors';
export default class AverageLikesPlatforms extends Component {
    render() {

        const {facebookMedia, instagramMedia, twitterMedia} = this.props;

        if (!Object.keys(facebookMedia).length || !Object.keys(instagramMedia).length || !Object.keys(twitterMedia).length) {
            return null;
        }
        const sortedInstagramMedia = [...instagramMedia].reverse();
        const sortedFacebookMedia = [...facebookMedia].reverse();
        const sortedTwitterMedia = [...twitterMedia].reverse();

        //var average1 = arr => arr.reduce( ( p, c ) => p + c, 0 ) / arr.length;

        function getAvg(array) {
            const total = array.reduce((acc, c) => acc + c, 0);
            return total / array.length;
        }


        const instagramlikesData = {
            x: 'Average Instagram Likes',
            y: getAvg(instagramMedia.map((post) => post.likes.count)) //how do i reference the array of all likes?
         };

        const facebooklikesData = {
            x: 'Average Facebook Likes',
            y: getAvg(facebookMedia.map((post) => post.likes.count))
        };

        const twitterfavoritesData = {
            x: 'Average Twitter Favorites',
            y: getAvg(twitterMedia.map((post) => post.likes.count))
        };

        const barChartLabels = sortedMedia.map((post) => moment.unix(Number(post.created_time)).format('MMM-D-Y'));
        const data = {
            datasets: [
                {
                    backgroundColor: `${violet}20`,
                    borderColor: red,
                    borderWidth: 1,
                    data: instagramlikesData,
                    hoverBackgroundColor: `${red}40`,
                    hoverBorderColor: red,
                    label: 'Likes'
                },
                {
                    backgroundColor: `${blue}20`,
                    borderColor: blue,
                    borderWidth: 1,
                    data: facebooklikesData,
                    hoverBackgroundColor: `${blue}40`,
                    hoverBorderColor: blue,
                    label: 'Comments'
                },
                {
                    backgroundColor: `${red}20`,
                    borderColor: blue,
                    borderWidth: 1,
                    data: twitterfavoritesData,
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
