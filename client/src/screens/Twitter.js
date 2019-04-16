import React, {Component} from 'react';
import queryString from 'query-string';

import TwitterUserInfo from '../components/TwitterUserInfo';
import LoginButton from '../components/LoginButton';
import styles from '../css/components/Platform.module.css';
import {setTwitterData} from '../services/set-data-service';

export default class Twitter extends Component {
    componentDidMount() {
        const userId = queryString.parse(window.location.hash).twitterUserId;

        setTwitterData(this.props, userId);
    }

    render() {
        const {twitterUserId, twitterUser} = this.props;

        if (!twitterUserId) {
            return (
                <LoginButton service={'twitter'} />
            );
        } else if (!twitterUser.id) {
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
