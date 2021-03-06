import React, {Component} from 'react';
import queryString from 'query-string';

import FacebookUserInfo from '../components/FacebookUserInfo';
import LoginButton from '../components/LoginButton';
import styles from '../css/components/PageLayout.module.css';
import {setFacebookData} from '../services/set-data-service';

export default class Facebook extends Component {
    componentDidMount() {
        const userId = queryString.parse(window.location.hash).facebookUserId;

        setFacebookData(this.props, userId);
    }

    render() {
        const {
            facebookUserId,
            facebookUser
        } = this.props;

        if (!facebookUserId) {
            return <LoginButton service={'facebook'} />;
        } else if (!facebookUser.name) {
            return null;
        } else if (facebookUser.error) {
            return (
                <div className={styles.userInfoWrapper}>
                    <p>{'There was an error with the loading the facebook user.'}</p>
                    <p>{JSON.stringify(facebookUser.error)}</p>
                </div>
            );
        }

        return (
            <div>
                <div className={styles.userInfoWrapper}>
                    <FacebookUserInfo facebookUser={facebookUser} />
                </div>
            </div>
        );
    }
}
