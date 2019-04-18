import React, {Component} from 'react';

import InstagramLikesAndComments from "../graphs/InstagramLikesAndComments";

export default class InstagramAnalytics extends Component {
    render() {
        const {instagramUser} = this.props;

        return (
            <div>
                <InstagramLikesAndComments {...this.props} />
            </div>
        );
    }
}
