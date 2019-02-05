import React, {Component} from 'react';
import InstagramEmbed from 'react-instagram-embed';

import styles from '../css/components/InstagramPost.module.css';

export default class InstagramPost extends Component {
    render() {
        const {post} = this.props;

        return (
            <InstagramEmbed
                className={styles.wrapper}
                url={post.link}
            />
        );
    }
}
