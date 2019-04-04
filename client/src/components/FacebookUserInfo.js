import React, {Component} from 'react';

import styles from '../css/components/FacebookUserInfo.module.css';
import facebookLogo from '../assets/facebook-logo.png';

export default class FacebookUserInfo extends Component {
    render() {
        const {facebookUser} = this.props;

        if (!facebookUser.id) {
            return null;
        }

        return (
            <div className={styles.wrapper}>
                <img
                    alt={''}
                    className={styles.logo}
                    src={facebookLogo}
                />
                <img
                    alt={''}
                    className={styles.profilePicture}
                    src={facebookUser.profileUrl}
                />
                <p>{facebookUser.name}</p>
                <p>{`${facebookUser.friends.summary.total_count} friends`}</p>
            </div>
        );
    }
}
