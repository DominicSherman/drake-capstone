import React, {Component} from 'react';

import LikesAndComments from '../graphs/LikesAndComments';
import FollowerRatio from '../graphs/FollowerRatio';
import {INSTAGRAM} from '../constants/analytic-types';
import FriendsProgressBar from '../graphs/FriendsProgressBar';
import styles from '../css/components/PageLayout.module.css';

export default class InstagramAnalytics extends Component {
    render() {
        return (
            <div>
                <LikesAndComments
                    platform={INSTAGRAM}
                    {...this.props}
                />
                <FollowerRatio
                    platform={INSTAGRAM}
                    {...this.props}
                />
                <div className={styles.graphWrapper}>
                    <FriendsProgressBar
                        platform={INSTAGRAM}
                        {...this.props}
                    />
                </div>
            </div>
        );
    }
}
