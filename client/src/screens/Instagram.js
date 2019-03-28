import React, {Component} from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import queryString from 'query-string';

import InstagramMedia from '../components/InstagramMedia';
import InstagramUserInfo from '../components/InstagramUserInfo';
import {getRedirectUri} from '../services/redirect-service';
import {setUserId} from '../services/local-storage-service';

export default class Instagram extends Component {
    componentDidMount() {
        const userId = queryString.parse(window.location.hash).instagramUserId;

        if (userId) {
            setUserId('instagram', userId);
            this.props.setInstagramAccessToken(userId);
        }
    }

    render() {
        const {
            instagramAccessToken,
            instagramUser,
            instagramMedia,
            setInstagramUser,
            setInstagramMedia
        } = this.props;

        if (!instagramAccessToken) {
            return (
                <Button
                    onClick={() => {
                        window.location.href = getRedirectUri('instagram');
                    }}
                    variant="dark"
                >
                    {'Log in to Instagram'}
                </Button>
            );
        } else if (!instagramUser.username) {
            setInstagramUser();
            setInstagramMedia();
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
                        <InstagramUserInfo instagramUser={instagramUser} />
                    </Col>
                    <Col>
                        <InstagramMedia
                            instagramMedia={instagramMedia}
                        />
                    </Col>
                </Row>
            </Container>
        );
    }
}
