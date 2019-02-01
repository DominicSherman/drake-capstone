import React, {Component} from 'react';
import rp from 'request-promise';
import styles from './css/App.module.css';
import {INSTAGRAM_AUTH} from './constants/links';
import {INSTAGRAM_SELF_INFO} from './constants/endpoints';

class App extends Component {
    async componentDidMount() {
        if (!window.location.hash) {
            window.location.href = INSTAGRAM_AUTH;
        }
        else {
            const access_token = window.location.hash.substr(14);

            const response = await rp({
                uri: INSTAGRAM_SELF_INFO,
                qs: {
                    access_token
                },
                json: true
            });

            console.log('response', response);
        }
    }

    render() {
        return (
            <div className={styles.wrapper}>
                <p className={styles.text}>{'Drake Capstone'}</p>
            </div>
        );
    }
}

export default App;
