import React, {Component} from 'react';
import queryString from 'query-string';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import FacebookUserInfo from '../components/FacebookUserInfo';
import LoginButton from '../components/LoginButton';

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
