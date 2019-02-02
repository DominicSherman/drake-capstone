import React, {Component} from 'react';
import InstagramPost from './InstagramPost';
import styles from '../css/components/InstagramMedia.module.css';

export default class InstagramMedia extends Component {
    render() {
        const {instagramMedia} = this.props;

        return (
            <div className={styles.wrapper}>
                {instagramMedia.map((post) =>
                    <InstagramPost
                        key={post.id}
                        post={post}
                    />
                )}
            </div>
        );
    }
}