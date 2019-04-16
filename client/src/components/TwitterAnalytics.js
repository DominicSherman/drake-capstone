import React, {Component} from 'react';

import styles from '../css/components/UserInfo.module.css';
import twitterLogo from '../assets/twitter-logo.png';
import TwitterFollowerRatio from "../graphs/TwitterFollowerRatio";

export default class TwitterAnalytics extends Component {
    render() {
        const {twitterUser} = this.props;

        return (
            <div>
                <div className={styles.logoWrapper}>
                    <a
                        href={'https://twitter.com/'}
                        target={'_blank'}
                    >
                        <img
                            alt={''}
                            className={styles.logo}
                            src={twitterLogo}
                        />
                    </a>
                </div>
                <div>
                    <TwitterFollowerRatio {...this.props}/>
                </div>
            </div>
        );
    }
}