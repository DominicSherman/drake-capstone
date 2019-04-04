import React, {Component} from 'react';
import queryString from 'query-string';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import {getRedirectUri} from '../services/redirect-service';
import {setUserId} from '../services/local-storage-service';
import FacebookUserInfo from '../components/FacebookUserInfo';

export default class Facebook extends Component {
    componentDidMount() {
        const userId = queryString.parse(window.location.hash).facebookUserId;

        if (userId) {
            setUserId('facebook', userId);
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
            return (
                <Button
                    onClick={() => {
                        window.location.href = getRedirectUri('facebook');
                    }}
                    variant="dark"
                >
                    {'Log in to Facebook'}
                </Button>
            );
        } else if (!facebookUser.name) {
            setFacebookUser();
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
                        <FacebookUserInfo facebookUser={facebookUser} />
                    </Col>
                </Row>
            </Container>
        );
    }
}
