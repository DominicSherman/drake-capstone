import React, {Component} from 'react';

import styles from '../css/components/UserInfo.module.css';
import twitterLogo from '../assets/twitter-logo.png';

export default class TwitterUserInfo extends Component {
    render() {
        const {twitterUser} = this.props;

        return (
            <div className={styles.wrapper}>
                <div className={styles.logoWrapper}>
                    <a
                        href={'https://twitter.com/'}
                        target={'_blank'}
                    >
                        <img
                            alt={''}
                            className={styles.logo}
                            src={twitterLogo}
                        />
                    </a>
                </div>
                <div className={styles.profilePictureWrapper}>
                    <img
                        alt={''}
                        className={styles.profilePicture}
                        src={twitterUser.profile_image_url.replace('_normal', '')}
                    />
                </div>
                <p>{twitterUser.screen_name}</p>
                <p>{twitterUser.name}</p>
                <p>{`"${twitterUser.description}"`}</p>
                <p>{`Following: ${twitterUser.friends_count}`}</p>
                <p>{`Followers: ${twitterUser.followers_count}`}</p>
                <p>{`Tweets: ${twitterUser.statuses_count}`}</p>
                <p>{`Favorites: ${twitterUser.favourites_count}`}</p>
            </div>
        );
    }
}
