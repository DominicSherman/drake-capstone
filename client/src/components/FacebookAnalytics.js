import React, {Component} from 'react';
import facebookLogo from '../assets/facebook-logo.png';
import styles from "../css/components/UserInfo.module.css";

export default class FacebookAnalytics extends Component {
    render() {
        const {facebookUser} = this.props;

        console.log('facebookUser', facebookUser);

        return (
            <div>
                <div className={styles.logoWrapper}>
                    <a
                        href={'https://www.facebook.com/'}
                        target={'_blank'}
                    >
                        <img
                            alt={''}
                            className={styles.logo}
                            src={facebookLogo}
                        />
                    </a>
                </div>
            </div>
        );
    }
}
