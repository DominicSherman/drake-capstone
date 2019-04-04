import React, {Component} from 'react';
import { TwitterTimelineEmbed, TwitterShareButton, TwitterFollowButton, TwitterHashtagButton, TwitterMentionButton, TwitterTweetEmbed, TwitterMomentShare, TwitterDMButton, TwitterVideoEmbed, TwitterOnAirButton } from 'react-twitter-embed';

import styles from '../css/components/TwitterMedia.module.css';

export default class TwitterMedia extends Component {
    render() {
        const {twitterMedia} = this.props;

        return (
            <div
                className={styles.wrapper}
            >
                {twitterMedia.map((post) =>
                    <TwitterTweetEmbed
                        key={post.id}
                        url={post.url}
                    />
                )}
            </div>
        );
    }
}