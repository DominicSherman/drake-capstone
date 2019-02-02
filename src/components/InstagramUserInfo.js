import React, {Component} from 'react';
import styles from '../css/components/InstagramUserInfo.module.css';
import instagramLogo from '../assets/instagram-logo.png';

export default class InstagramUserInfo extends Component {
    render() {
        const {instagramUser} = this.props;

        return (
            Object.keys(instagramUser).length &&
            <div className={styles.wrapper}>
                <img
                    className={styles.logo}
                    src={instagramLogo}
                />
                <img
                    className={styles.profilePicture}
                    src={instagramUser.profile_picture}
                />
                <p>{instagramUser.username}</p>
                <p>{`Bio: "${instagramUser.bio}"`}</p>
                <p>{`Posts: ${instagramUser.counts.media}`}</p>
                <p>{`Following: ${instagramUser.counts.follows}`}</p>
                <p>{`Followers: ${instagramUser.counts.followed_by}`}</p>
            </div>
        );
    }
}