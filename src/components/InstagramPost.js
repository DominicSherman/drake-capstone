import React, {Component} from 'react';
import styles from '../css/components/InstagramPost.module.css';

export default class InstagramPost extends Component {
    render() {
        const {post} = this.props;

        return (
            <div className={styles.wrapper}>
                <img
                    className={styles.image}
                    src={post.images.standard_resolution.url}
                />
                <p>{post.caption ? post.caption.text : ''}</p>
            </div>
        );
    }
}