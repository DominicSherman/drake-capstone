import React, {Component} from 'react';

import styles from '../css/components/InstagramMedia.module.css';
import InstagramEmbed from 'react-instagram-embed';

export default class InstagramMedia extends Component {
    render() {
        const {instagramMedia, userWidth} = this.props;

        return (
            <div
                className={styles.wrapper}
                style={{marginLeft: userWidth}}
            >
                {instagramMedia.map((post) =>
                    <InstagramEmbed
                        url={post.link}
                    />
                )}
            </div>
        );
    }
}
