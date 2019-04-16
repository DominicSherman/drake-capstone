import React, {Component} from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import TwitterFollowerRatio from '../graphs/TwitterFollowerRatio';
import InstagramLikesAndComments from '../graphs/InstagramLikesAndComments';
import {setFacebookData, setInstagramData, setTwitterData} from '../services/set-data-service';
import Dropdown from "react-bootstrap/Dropdown";
import styles from "../css/components/Platform.module.css"

export default class Analytics extends Component {
    componentDidMount() {
        setInstagramData(this.props);
        setTwitterData(this.props);
        setFacebookData(this.props);
    }

    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.select = this.select.bind(this);
        this.state = {
            dropdownOpen: false,
            value : "Analytics View",
            posts : [
                {
                    id: 1,
                    topic: "Facebook",
                    btnSelected: false
                },
                {
                    id: 2,
                    topic: "Instagram",
                    btnSelected: false
                },
                {
                    id: 1,
                    topic: "Twitter",
                    btnSelected: false
                },
                {
                    id: 1,
                    topic: "Overall",
                    btnSelected: true
                },
            ]
        };
    }

    toggle() {
        this.setState({
            dropdownOpen: !this.state.dropdownOpen
        });
    }

    select(event) {
        this.setState({
            dropdownOpen: !this.state.dropdownOpen,
            value: event.target.innerText
        });
    }

    render() {
        return (
            <div>
                <div>
                    <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                        <Dropdown.Toggle>
                            {this.state.value}
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item onClick={this.select}>Facebook</Dropdown.Item>
                            <Dropdown.Item onClick={this.select}>Instagram</Dropdown.Item>
                            <Dropdown.Item onClick={this.select}>Twitter</Dropdown.Item>
                            <Dropdown.Item onClick={this.select}>Overall</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </div>
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
