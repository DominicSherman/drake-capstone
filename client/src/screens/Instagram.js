import React, {Component} from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import queryString from 'query-string';

import InstagramMedia from '../components/InstagramMedia';
import InstagramUserInfo from '../components/InstagramUserInfo';
import LoginButton from '../components/LoginButton';

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
            instagramMedia,
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
