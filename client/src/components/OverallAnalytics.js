import React, {Component} from 'react';

import InstagramTwitterFollowers from '../graphs/OverallFollowers';

export default class OverallAnalytics extends Component {
    render() {
        return (
            <div>
                <InstagramTwitterFollowers {...this.props} />
            </div>
        );
    }
}
