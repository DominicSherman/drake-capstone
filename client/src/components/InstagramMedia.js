import React, {Component} from 'react';
import InstagramEmbed from 'react-instagram-embed';

import styles from '../css/components/InstagramMedia.module.css';

export default class InstagramMedia extends Component {
    render() {
        const {instagramMedia} = this.props;

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
