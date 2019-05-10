import React, {Component} from 'react';
import queryString from 'query-string';

import InstagramUserInfo from '../components/InstagramUserInfo';
import LoginButton from '../components/LoginButton';
import styles from '../css/components/PageLayout.module.css';
import {setInstagramData} from '../services/set-data-service';

export default class Instagram extends Component {
    componentDidMount() {
        const userId = queryString.parse(window.location.hash).instagramUserId;

        setInstagramData(this.props, userId);
    }

    render() {
        const {
            instagramUserId,
            instagramUser
        } = this.props;

        if (!instagramUserId) {
            return (
                <LoginButton service={'instagram'} />
            );
        } else if (!instagramUser.username) {
            return null;
        }

        return (
            <div>
                <div className={styles.userInfoWrapper}>
                    <InstagramUserInfo instagramUser={instagramUser} />
                </div>
            </div>
        );
    }
}
