import React, {Component} from 'react';

import InstagramLikesAndComments from '../graphs/InstagramLikesAndComments';

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
        return (
            <div>
                <InstagramLikesAndComments {...this.props} />
            </div>
        );
    }
}
