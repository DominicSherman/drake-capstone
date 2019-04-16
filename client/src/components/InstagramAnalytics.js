import React, {Component} from 'react';

import styles from '../css/components/UserInfo.module.css';
import instagramLogo from '../assets/instagram-logo.png';
import InstagramLikesAndComments from "../graphs/InstagramLikesAndComments";

export default class InstagramAnalytics extends Component {
    render() {
        const {instagramUser} = this.props;

        return (
            <div className={styles.wrapper}>
                <div className={styles.logoWrapper}>
                    <a
                        href={'https://www.instagram.com/'}
                        target={'_blank'}
                    >
                        <img
                            alt={''}
                            className={styles.logo}
                            src={instagramLogo}
                        />
                    </a>
                </div>
                <div>
                    <InstagramLikesAndComments {...this.props} />
                </div>
            </div>
        );
    }
}
