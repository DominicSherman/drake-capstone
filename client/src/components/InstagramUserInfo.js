import React, {Component} from 'react';

import styles from '../css/components/UserInfo.module.css';
import instagramLogo from '../assets/instagram-logo.png';

export default class InstagramUserInfo extends Component {
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
                <div className={styles.profilePictureWrapper}>
                    <img
                        alt={''}
                        className={styles.profilePicture}
                        src={instagramUser.hd_profile_pic_url_info.url}
                    />
                </div>
                <p>{instagramUser.username}</p>
                <p>{`"${instagramUser.biography}"`}</p>
                <p>{`Posts: ${instagramUser.media_count}`}</p>
                <p>{`Following: ${instagramUser.following_count}`}</p>
                <p>{`Followers: ${instagramUser.follower_count}`}</p>
            </div>
        );
    }
}
