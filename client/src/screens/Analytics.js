import React, {Component} from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import {setFacebookData, setInstagramData, setTwitterData} from '../services/set-data-service';
import Dropdown from "react-bootstrap/Dropdown";
import styles from "../css/components/PageLayout.module.css"
import InstagramAnalytics from "../components/InstagramAnalytics";
import TwitterAnalytics from "../components/TwitterAnalytics";
import FacebookAnalytics from "../components/FacebookAnalytics";
import OverallAnalytics from "../components/OverallAnalytics";

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
                    id: 3,
                    topic: "Twitter",
                    btnSelected: false
                },
                {
                    id: 4,
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

        const { value } = this.state;

        if(value == "Instagram"){
            return(
                <div>
                    <div className={styles.dropDownWrapper}>
                        <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                            <Dropdown.Toggle>
                                {this.state.value}
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <Dropdown.Item onClick={this.select}>Facebook</Dropdown.Item>
                                <Dropdown.Item onClick={this.select}>Instagram</Dropdown.Item>
                                <Dropdown.Item onClick={this.select}>Twitter</Dropdown.Item>
                                <Dropdown.Divider/>
                                <Dropdown.Item onClick={this.select}>Overall</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </div>
                    <InstagramAnalytics {...this.props}/>
                </div>
            );
        } else if(value == "Facebook"){
            return(
                <div>
                    <div className={styles.dropDownWrapper}>
                        <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                            <Dropdown.Toggle>
                                {this.state.value}
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <Dropdown.Item onClick={this.select}>Facebook</Dropdown.Item>
                                <Dropdown.Item onClick={this.select}>Instagram</Dropdown.Item>
                                <Dropdown.Item onClick={this.select}>Twitter</Dropdown.Item>
                                <Dropdown.Divider/>
                                <Dropdown.Item onClick={this.select}>Overall</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </div>
                    <FacebookAnalytics {...this.props}/>
                </div>
            );
        } else if(value == "Twitter"){
            return(
                <div>
                    <div className={styles.dropDownWrapper}>
                        <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                            <Dropdown.Toggle>
                                {this.state.value}
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <Dropdown.Item onClick={this.select}>Facebook</Dropdown.Item>
                                <Dropdown.Item onClick={this.select}>Instagram</Dropdown.Item>
                                <Dropdown.Item onClick={this.select}>Twitter</Dropdown.Item>
                                <Dropdown.Divider/>
                                <Dropdown.Item onClick={this.select}>Overall</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </div>
                    <TwitterAnalytics {...this.props}/>
                </div>
            );
        } else if(value == "Overall"){
            return(
                <div>
                    <div className={styles.dropDownWrapper}>
                        <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                            <Dropdown.Toggle>
                                {this.state.value}
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <Dropdown.Item onClick={this.select}>Facebook</Dropdown.Item>
                                <Dropdown.Item onClick={this.select}>Instagram</Dropdown.Item>
                                <Dropdown.Item onClick={this.select}>Twitter</Dropdown.Item>
                                <Dropdown.Divider/>
                                <Dropdown.Item onClick={this.select}>Overall</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </div>
                    <OverallAnalytics {...this.props}/>
                </div>
            );
        } else{
            return (
                <div>
                    <div className={styles.dropDownWrapper}>
                        <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                            <Dropdown.Toggle>
                                {this.state.value}
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <Dropdown.Item onClick={this.select}>Facebook</Dropdown.Item>
                                <Dropdown.Item onClick={this.select}>Instagram</Dropdown.Item>
                                <Dropdown.Item onClick={this.select}>Twitter</Dropdown.Item>
                                <Dropdown.Divider/>
                                <Dropdown.Item onClick={this.select}>Overall</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </div>
                    <OverallAnalytics {...this.props}/>
                </div>
            );
        }
    }
}
