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

let userInfoRef = {
    clientWidth: 0
};

export default class Instagram extends Component {
    constructor(props) {
        super(props);

        this.state = {
            clientWidth: 0
        };
    }

    componentDidMount() {
        const userId = queryString.parse(window.location.hash).instagramUserId;

        if (userId) {
            setUserId('instagram', userId);
            this.props.setInstagramAccessToken(userId);
        }
    }

    componentDidUpdate(prevProps) {
        const ref = document.getElementById('userInfo');

        if (!prevProps.instagramAccessToken && this.props.instagramAccessToken && !this.props.instagramUser.username) {
            console.log('here');
            this.props.setInstagramUser();
            this.props.setInstagramMedia();
        }

        if (ref && userInfoRef.clientWidth !== ref.clientWidth) {
            userInfoRef = ref;
        }
    }

    render() {
        const {instagramAccessToken, instagramUser, instagramMedia} = this.props;

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
        }

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
                            userWidth={userInfoRef.clientWidth}
                        />
                    </Col>
                </Row>
            </Container>
        );
    }
}
