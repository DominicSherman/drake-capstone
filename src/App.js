import React, {Component} from 'react';
import rp from 'request-promise';
import styles from './css/App.module.css';
import {INSTAGRAM_AUTH} from './constants/links';
import {INSTAGRAM_MEDIA, INSTAGRAM_USER_INFO} from './constants/endpoints';
import InstagramUserInfo from './components/InstagramUserInfo';
import InstagramMedia from './components/InstagramMedia';

class App extends Component {
    async componentDidMount() {
        if (!window.location.hash) {
            window.location.href = INSTAGRAM_AUTH;
        }
        else {
            const access_token = window.location.hash.substr(14);

            const userInfoResponse = await rp({
                uri: INSTAGRAM_USER_INFO,
                qs: {
                    access_token
                },
                json: true
            });
            const userMediaResponse = await rp({
                uri: INSTAGRAM_MEDIA,
                qs: {
                    access_token
                },
                json: true
            });

            this.props.actions.setInstagramUser(userInfoResponse.data);
            this.props.actions.setInstagramMedia(userMediaResponse.data);
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
