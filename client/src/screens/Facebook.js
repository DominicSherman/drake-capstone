import React, {Component} from 'react';
import queryString from 'query-string';

import FacebookUserInfo from '../components/FacebookUserInfo';
import LoginButton from '../components/LoginButton';
import styles from '../css/components/Platform.module.css';
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
