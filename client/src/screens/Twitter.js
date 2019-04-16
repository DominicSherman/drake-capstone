import React, {Component} from 'react';
import queryString from 'query-string';

import TwitterUserInfo from '../components/TwitterUserInfo';
import LoginButton from '../components/LoginButton';
import styles from '../css/components/Platform.module.css';

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
            setTwitterUser,
            setTwitterMedia
        } = this.props;

        if (!twitterUserId) {
            return (
                <LoginButton service={'twitter'} />
            );
        } else if (!twitterUser.id) {
            setTwitterUser();
            setTwitterMedia();

            return null;
        }

        return (
            <div>
                <div className={styles.userInfoWrapper}>
                    <TwitterUserInfo twitterUser={twitterUser} />
                </div>
            </div>
        );
    }
}
