import React, {Component} from 'react';
import queryString from 'query-string';

import InstagramUserInfo from '../components/InstagramUserInfo';
import LoginButton from '../components/LoginButton';
import styles from "../css/components/Platform.module.css";
import FacebookUserInfo from "./Facebook";
import ButtonToolbar from "react-bootstrap/ButtonToolbar";
import Button from "react-bootstrap/Button";

export default class Instagram extends Component {
    componentDidMount() {
        const userId = queryString.parse(window.location.hash).instagramUserId;

        if (userId) {
            this.props.setInstagramUserId(userId);
        }
    }

    render() {
        const {
            instagramUserId,
            instagramUser,
            setInstagramUser,
            setInstagramMedia
        } = this.props;

        if (!instagramUserId) {
            return (
                <LoginButton service={'instagram'} />
            );
        } else if (!instagramUser.username) {
            setInstagramUser();
            setInstagramMedia();

            return null;
        }

        return (

            <div>
                <div className={styles.userInfoWrapper}>
                    <InstagramUserInfo instagramUser={instagramUser} />
                </div>
                <div className={styles.buttonWrapper}>
                    <ButtonToolbar>
                        <Button id = "Instagram" href="https://www.instagram.com/">Instagram</Button>
                    </ButtonToolbar>
                </div>
            </div>
        );
    }
}
