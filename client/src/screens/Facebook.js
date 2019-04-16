import React, {Component} from 'react';
import queryString from 'query-string';

import FacebookUserInfo from '../components/FacebookUserInfo';
import LoginButton from '../components/LoginButton';
import styles from "../css/components/Platform.module.css";
import ButtonToolbar from "react-bootstrap/ButtonToolbar";
import Button from "react-bootstrap/Button";

export default class Facebook extends Component {
    componentDidMount() {
        const userId = queryString.parse(window.location.hash).facebookUserId;

        if (userId) {
            this.props.setFacebookUserId(userId);
        }
    }

    render() {
        const {
            facebookUserId,
            facebookUser,
            setFacebookUser
        } = this.props;

        if (!facebookUserId) {
            return <LoginButton service={'facebook'} />;
        } else if (!facebookUser.name) {
            setFacebookUser();

            return null;
        }

        return (
            <div>
                <div className={styles.userInfoWrapper}>
                    <FacebookUserInfo facebookUser={facebookUser} />
                </div>
                <div className={styles.buttonWrapper}>
                    <ButtonToolbar>
                        <Button id = "Facebook" href="https://www.facebook.com/">Facebook</Button>
                    </ButtonToolbar>
                </div>
            </div>
        );
    }
}
