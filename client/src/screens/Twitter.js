import React, {Component} from 'react';
import queryString from 'query-string';

import TwitterUserInfo from '../components/TwitterUserInfo';
import LoginButton from '../components/LoginButton';

export default class Twitter extends Component {
    componentDidMount() {
        const userId = queryString.parse(window.location.hash).twitterUserId;

        if (userId) {
            this.props.setTwitterUserId(userId);
        }
    }

    render() {
        const {
            twitterUserId,
            twitterUser,
            setTwitterUser
        } = this.props;

        if (!twitterUserId) {
            return (
                <LoginButton service={'twitter'} />
            );
        } else if (!twitterUser.id) {
            setTwitterUser();

            return null;
        }

        return (
            <TwitterUserInfo twitterUser={twitterUser} />
        );
    }
}
