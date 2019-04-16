import React, {Component} from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import TwitterFollowerRatio from '../graphs/TwitterFollowerRatio';
import InstagramLikesAndComments from '../graphs/InstagramLikesAndComments';

export default class Analytics extends Component {
    componentDidMount() {
        const {
            instagramUserId,
            instagramUser,
            twitterUserId,
            twitterUser,
            facebookUserId,
            facebookUser,
            setInstagramUser,
            setInstagramMedia,
            setTwitterUser,
            setFacebookUser
        } = this.props;

        if (instagramUserId && !instagramUser.username) {
            setInstagramUser();
            setInstagramMedia();
        }

        if (twitterUserId && !twitterUser.id) {
            setTwitterUser();
        }

        if (facebookUserId && !facebookUser.name) {
            setFacebookUser();
        }
    }

    render() {
        return (
            <div>
                <Container>
                    <Row>
                        <Col>
                            <InstagramLikesAndComments {...this.props} />
                        </Col>
                        <Col>
                            <TwitterFollowerRatio {...this.props} />
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}
