import React, {Component} from 'react';

import InstagramLikesAndComments from '../graphs/InstagramLikesAndComments';
import FollowerRatio from '../graphs/FollowerRatio';
import {INSTAGRAM} from '../constants/analytic-types';
import FriendsProgressBar from "../graphs/FriendsProgressBar";
import styles from "../css/components/PageLayout.module.css"

export default class InstagramAnalytics extends Component {
    render() {
        return (
            <div>
                <InstagramLikesAndComments {...this.props} />
                <FollowerRatio
                    platform={INSTAGRAM}
                    {...this.props}
                />
                <div className={styles.graphWrapper}>
                    <FriendsProgressBar
                        platform = {INSTAGRAM}
                        {...this.props}
                    />
                </div>
            </div>
        );
    }
}
