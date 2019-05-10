import React, {Component} from 'react';
import Dropdown from 'react-bootstrap/Dropdown';

import {setFacebookData, setInstagramData, setTwitterData} from '../services/set-data-service';
import styles from '../css/components/PageLayout.module.css';
import InstagramAnalytics from '../components/InstagramAnalytics';
import TwitterAnalytics from '../components/TwitterAnalytics';
import FacebookAnalytics from '../components/FacebookAnalytics';
import OverallAnalytics from '../components/OverallAnalytics';
import {FACEBOOK, INFLUENCE, INSTAGRAM, TWITTER} from '../constants/analytic-types';

const mapValueToComponent = {
    [FACEBOOK]: FacebookAnalytics,
    [INFLUENCE]: OverallAnalytics,
    [INSTAGRAM]: InstagramAnalytics,
    [TWITTER]: TwitterAnalytics
};

export default class Analytics extends Component {
    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.select = this.select.bind(this);
        this.state = {
            dropdownOpen: false,
            value: TWITTER
        };
    }

    componentDidMount() {
        setInstagramData(this.props);
        setTwitterData(this.props);
        setFacebookData(this.props);
    }

    /* eslint-disable react/no-set-state */
    toggle = () => this.setState((prevState) => ({dropdownOpen: !prevState.dropdownOpen}));

    select = (event) => {
        this.setState({value: event.target.innerText});
        this.toggle();
    };
    /* eslint-enable react/no-set-state */

    render() {
        const CurrentComponent = mapValueToComponent[this.state.value];

        return (
            <div>
                <div className={styles.dropDownWrapper}>
                    <Dropdown
                        isopen={this.state.dropdownOpen.toString()}
                        toggle={this.toggle}
                    >
                        <Dropdown.Toggle>{this.state.value}</Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Item onClick={this.select}>{FACEBOOK}</Dropdown.Item>
                            <Dropdown.Item onClick={this.select}>{INSTAGRAM}</Dropdown.Item>
                            <Dropdown.Item onClick={this.select}>{TWITTER}</Dropdown.Item>
                            <Dropdown.Divider />
                            <Dropdown.Item onClick={this.select}>{INFLUENCE}</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </div>
                <div>
                    <CurrentComponent {...this.props} />
                </div>
            </div>
        );
    }
}
