import React, {Component} from 'react';
import {
    XYPlot,
    XAxis,
    YAxis,
    HorizontalGridLines,
    HorizontalBarSeries,
    HeatmapSeries,
    LineSeries,
    RadialChart,
    VerticalBarSeries,
    LineMarkSeries, HorizontalRectSeries
} from 'react-vis';

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

        const barChartData = instagramMedia.map((post) => ({
            x: post.created_time,
            y: post.likes.count
        }));

        return (
            <div>
                <XYPlot
                    height={300}
                    width={600}
                >
                    <XAxis
                        title={'Date'}
                    />
                    <YAxis
                        title={'Likes'}
                    />
                    <HorizontalBarSeries
                        data={barChartData}
                    />
                </XYPlot>
            </div>
        );

        const myData = [{angle: 1}, {angle: 5}, {angle: 2}];

        return (
            <div>{'ANALYTICS'}
                <h1> MyFirstGraph </h1>

                <XYPlot
                    width={200}
                    height={300}
                >
                    <HorizontalGridLines />
                    <LineSeries
                        color="red"
                        data={[
                            {x: 2, y: 10},
                            {x: 2, y: 5},
                            {x: 3, y: 15}
                        ]}
                    />
                    <XAxis title="Hello there" />
                    <YAxis />
                </XYPlot>

                <XYPlot
                    width={300}
                    height={300}
                    getX={(d) => d[0]}
                    getY={(d) => d[1]}
                >
                    <HorizontalBarSeries
                        color="cyan"
                        data={[
                            [1, 0],
                            [2, 1],
                            [3, 2]
                        ]}
                    />
                    <XAxis />
                    <YAxis />
                </XYPlot>

                <XYPlot
                    width={300}
                    height={300}
                >
                    <XAxis />
                    <YAxis />
                    <HeatmapSeries
                        colorType="literal"
                        getColor={(d) => d.color === 'bad' ? '#f00' : '#0f0'}
                        data={[
                            {x: 1, y: 0, color: 'bad'},
                            {x: 1, y: 5, color: 'bad'},
                            {x: 1, y: 10, color: 'good'}
                        ]}
                    />
                </XYPlot>

                <RadialChart
                    data={myData}
                    width={300}
                    height={300}
                />
            </div>

        );
    }
}
