import React, {Component} from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import queryString from 'query-string';

import TwitterMedia from '../components/TwitterMedia';
import TwitterUserInfo from '../components/TwitterUserInfo';
import {getRedirectUri} from '../services/redirect-service';
import {setUserId} from '../services/local-storage-service';

export default class Twitter extends Component {
    componentDidMount() {
        const userId = queryString.parse(window.location.hash).twitterUserId;

        if (userId) {
            setUserId('twitter', userId);
            this.props.setTwitterUserId(userId);
        }
    }

    render() {
        const {
            twitterUserId,
            twitterUser,
            twitterMedia,
            setTwitterUser,
            setTwitterMedia
        } = this.props;

        if (!twitterUserId) {
            return (
                <Button
                    onClick={() => {
                        window.location.href = getRedirectUri('twitter');
                    }}
                    variant="dark"
                >
                    {'Log in to Twitter'}
                </Button>
            );
        } else if (!twitterUser.username) {
            setTwitterUser();
            setTwitterMedia();
        }

        return (
            <Container
                fluid
            >
                <Row>
                    <Col
                        id={'userInfo'}
                        sm={4}
                    >
                        <TwitterUserInfo twitterUser={twitterUser} />
                    </Col>
                    <Col>
                        <TwitterMedia
                            twitterMedia={twitterMedia}
                        />
                    </Col>
                </Row>
            </Container>
        );
    }
}
