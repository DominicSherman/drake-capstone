import React, {Component} from 'react';

import styles from '../css/components/TwitterUserInfo.module.css';
import twitterLogo from '../assets/Twitter-Logo-PNG-1.png';

export default class TwitterUserInfo extends Component {
    render() {
        const {twitterUser} = this.props;

        if (!twitterUser.id) {
            return null;
        }

        return (
            <div className={styles.wrapper}>
                <img
                    alt={''}
                    className={styles.logo}
                    src={twitterLogo}
                />
                <img
                    alt={''}
                    className={styles.profilePicture}
                    src={twitterUser.profile_image_url.replace('_normal', '')}
                />
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
