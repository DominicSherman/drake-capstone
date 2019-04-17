import React, {Component} from 'react';

import {setFacebookData, setInstagramData, setTwitterData} from '../services/set-data-service';
import Dropdown from "react-bootstrap/Dropdown";
import styles from "../css/components/PageLayout.module.css"
import InstagramAnalytics from "../components/InstagramAnalytics";
import TwitterAnalytics from "../components/TwitterAnalytics";
import FacebookAnalytics from "../components/FacebookAnalytics";
import OverallAnalytics from "../components/OverallAnalytics";

const mapValueToComponent = {
    ['Instagram']: InstagramAnalytics,
    ['Facebook']: FacebookAnalytics,
    ['Twitter']: TwitterAnalytics,
    ['Influence']: OverallAnalytics
}

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
            value : "Influence"
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
        const Component = mapValueToComponent[this.state.value];

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
                            <Dropdown.Item onClick={this.select}>Influence</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </div>
                <div>
                    <Component {...this.props}/>
                </div>
            </div>
        );
    }
}
