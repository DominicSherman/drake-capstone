import React, {Component} from 'react';

import styles from './css/App.module.css';

export default class App extends Component {
    render() {
        return (
            <div className={styles.wrapper}>
                <p className={styles.text}>{'Drake Capstone'}</p>
            </div>
        );
    }
}
