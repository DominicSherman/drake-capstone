import React, {Component} from 'react';
import { TwitterTimelineEmbed, TwitterShareButton, TwitterFollowButton, TwitterHashtagButton, TwitterMentionButton, TwitterTweetEmbed, TwitterMomentShare, TwitterDMButton, TwitterVideoEmbed, TwitterOnAirButton } from 'react-twitter-embed';


import styles from '../css/components/InstagramMedia.module.css';

export default class TwitterMedia extends Component {
    render() {
        const {TwitterMedia} = this.props;

        return (
            <div
                className={styles.wrapper}
            >
                {instagramMedia.map((post) =>
                    <InstagramEmbed
                        key={post.id}
                        url={post.link}
                    />
                )}
            </div>
        );
    }
}