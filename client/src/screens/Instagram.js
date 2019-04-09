import React, {Component} from 'react';
import queryString from 'query-string';

import InstagramUserInfo from '../components/InstagramUserInfo';
import LoginButton from '../components/LoginButton';

export default class Instagram extends Component {
    componentDidMount() {
        const userId = queryString.parse(window.location.hash).instagramUserId;

        if (userId) {
            this.props.setInstagramUserId(userId);
        }
    }

    render() {
        const {
            instagramUserId,
            instagramUser,
            setInstagramUser,
            setInstagramMedia
        } = this.props;

        if (!instagramUserId) {
            return (
                <LoginButton service={'instagram'} />
            );
        } else if (!instagramUser.username) {
            setInstagramUser();
            setInstagramMedia();

            return null;
        }

        return (
            <InstagramUserInfo instagramUser={instagramUser} />
        );
    }
}
