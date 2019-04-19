import React, {Component} from 'react';

import FollowerRatio from '../graphs/FollowerRatio';
import {TWITTER} from '../constants/analytic-types';
import FriendsProgressBar from '../graphs/FriendsProgressBar';
import styles from '../css/components/PageLayout.module.css';

export default class TwitterAnalytics extends Component {
    render() {
        return (
            <div>
                <FollowerRatio
                    platform={TWITTER}
                    {...this.props}
                />
                <div className={styles.graphWrapper}>
                    <FriendsProgressBar
                        platform={TWITTER}
                        {...this.props}
                    />
                </div>
            </div>
        );
    }
}
