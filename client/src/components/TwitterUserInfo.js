import React, {Component} from 'react';
import { TwitterTimelineEmbed, TwitterShareButton, TwitterFollowButton, TwitterHashtagButton, TwitterMentionButton, TwitterTweetEmbed, TwitterMomentShare, TwitterDMButton, TwitterVideoEmbed, TwitterOnAirButton } from 'react-twitter-embed';

import styles from '../css/components/TwitterUserInfo.module.css';
import twitterLogo from "../assets/Twitter-Logo-PNG-1.png";

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
                    src={twitterUser.profile_picture}
                />
                <p>{twitterUser.username}</p>
                <p>{`Bio: "${twitterUser.bio}"`}</p>
                <p>{`Posts: ${twitterUser.counts.media}`}</p>
                <p>{`Following: ${twitterUser.counts.follows}`}</p>
                <p>{`Followers: ${twitterUser.counts.followed_by}`}</p>
            </div>
        );
    }
}