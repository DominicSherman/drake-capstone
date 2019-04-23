import React, {Component} from 'react';

import OverallFollowers from '../graphs/OverallFollowers';
import styles from "../css/components/PageLayout.module.css";
import TotalPosts from "../graphs/TotalPosts";

export default class OverallAnalytics extends Component {
    render() {
        return (
            <div>
                <OverallFollowers {...this.props} />
                <div className={styles.graphWrapper}>
                    <TotalPosts
                        {...this.props}
                    />
                </div>
            </div>
        );
    }
}
