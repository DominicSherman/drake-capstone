import React, {Component} from 'react';

import InstagramTwitterFollowers from '../graphs/OverallFollowers';
import AverageLikesPlatforms from '../graphs/AverageLikes';

export default class OverallAnalytics extends Component {
    render() {
        return (
            <div>
                <div style={{paddingBottom: 24}}>
                    <InstagramTwitterFollowers {...this.props} />
                </div>
                <AverageLikesPlatforms {...this.props} />
            </div>
        );
    }
}
