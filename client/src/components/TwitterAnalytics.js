import React, {Component} from 'react';

import TwitterFollowerRatio from "../graphs/TwitterFollowerRatio";

export default class TwitterAnalytics extends Component {
    render() {
        const {twitterUser} = this.props;

        return (
            <div>
                <TwitterFollowerRatio {...this.props}/>
            </div>
        );
    }
}