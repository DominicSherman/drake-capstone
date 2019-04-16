import React, {Component} from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import TwitterFollowerRatio from '../graphs/TwitterFollowerRatio';
import InstagramLikesAndComments from '../graphs/InstagramLikesAndComments';
import {setFacebookData, setInstagramData, setTwitterData} from '../services/set-data-service';

export default class Analytics extends Component {
    componentDidMount() {
        setInstagramData(this.props);
        setTwitterData(this.props);
        setFacebookData(this.props);
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
