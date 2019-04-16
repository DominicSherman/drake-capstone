import React, {Component} from 'react';

import styles from '../css/components/UserInfo.module.css';
import facebookLogo from '../assets/facebook-logo.png';

export default class FacebookUserInfo extends Component {
    render() {
        const {facebookUser} = this.props;

        return (
            <div className={styles.wrapper}>
                <div className={styles.logoWrapper}>
                    <a
                        href={'https://www.facebook.com/'}
                        target={'_blank'}
                    >
                        <img
                            alt={''}
                            className={styles.logo}
                            src={facebookLogo}
                        />
                    </a>
                </div>
                <div className={styles.profilePictureWrapper}>
                    <img
                        alt={''}
                        className={styles.profilePicture}
                        src={facebookUser.profileUrl}
                    />
                </div>
                <p>{facebookUser.name}</p>
                <p>{`${facebookUser.friends.summary.total_count} friends`}</p>
            </div>
        );
    }
}
