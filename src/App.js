import React, {Component} from 'react';
import styles from './css/App.module.css';
import {INSTAGRAM_AUTH} from './constants/links';
import InstagramUserInfo from './components/InstagramUserInfo';
import InstagramMedia from './components/InstagramMedia';

class App extends Component {
    componentDidMount() {
        if (!window.location.hash) {
            window.location.href = INSTAGRAM_AUTH;
        } else {
            const accessToken = window.location.hash.substr(14);
            this.props.setAccessToken(accessToken);
            this.props.setInstagramUser();
            this.props.setInstagramMedia();
        }
    }

    render() {
        const {instagramMedia, instagramUser} = this.props;

        return (
            <div className={styles.wrapper}>
                <p className={styles.text}>{'Drake Capstone'}</p>
                <InstagramUserInfo instagramUser={instagramUser} />
                <InstagramMedia instagramMedia={instagramMedia} />
            </div>
        );
    }
}

export default App;
