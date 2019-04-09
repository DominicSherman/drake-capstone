import React, {Component} from 'react';
import {Bar} from 'react-chartjs-2';
import moment from 'moment';

export default class Analytics extends Component {
    componentDidMount() {
        const {
            instagramUserId,
            instagramUser,
            twitterUserId,
            twitterUser,
            facebookUserId,
            facebookUser,
            setInstagramUser,
            setInstagramMedia,
            setTwitterUser,
            setFacebookUser
        } = this.props;

        if (instagramUserId && !instagramUser.username) {
            setInstagramUser();
            setInstagramMedia();
        }

        if (twitterUserId && !twitterUser.id) {
            setTwitterUser();
        }

        if (facebookUserId && !facebookUser.name) {
            setFacebookUser();
        }
    }

    render() {
        console.log('this.props', this.props);

        const {instagramMedia} = this.props;

        if (!instagramMedia.length) {
            return null;
        }

        const sortedMedia = instagramMedia.reverse();
        console.log('sortedMedia', sortedMedia);
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
                    backgroundColor: 'rgba(255,99,132,0.2)',
                    borderColor: 'rgba(255,99,132,1)',
                    borderWidth: 1,
                    data: likesData,
                    hoverBackgroundColor: 'rgba(255,99,132,0.4)',
                    hoverBorderColor: 'rgba(255,99,132,1)',
                    label: 'Likes'
                },
                {
                    backgroundColor: 'rgba(0,104,217,0.2)',
                    borderColor: 'rgba(0,104,217,1)',
                    borderWidth: 1,
                    data: commentData,
                    hoverBackgroundColor: 'rgba(0,104,217,0.4)',
                    hoverBorderColor: 'rgba(255,99,132,1)',
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
                />
            </div>
        );
    }
}
