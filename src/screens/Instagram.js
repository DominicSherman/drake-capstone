import React, {Component} from 'react';
import Container from 'react-bootstrap/es/Container';
import Row from 'react-bootstrap/es/Row';
import Col from 'react-bootstrap/es/Col';

import InstagramMedia from '../components/InstagramMedia';
import InstagramUserInfo from '../components/InstagramUserInfo';

let userInfoRef;

export default class Instagram extends Component {
    componentDidMount() {
        userInfoRef = document.getElementById('userInfo');
    }

    render() {
        const {instagramUser, instagramMedia} = this.props;

        return (
            <Container
                fluid
            >
                <Row>
                    <Col
                        id={'userInfo'}
                        sm={4}
                        style={{position: 'fixed'}}
                    >
                        <InstagramUserInfo instagramUser={instagramUser} />
                    </Col>
                    <Col>
                        <InstagramMedia
                            instagramMedia={instagramMedia}
                            userWidth={userInfoRef ? userInfoRef.clientWidth : 0}
                        />
                    </Col>
                </Row>
            </Container>
        );
    }
}
