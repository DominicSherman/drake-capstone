import React, {Component} from 'react';

import styles from './css/App.module.css';
import Routing from './Routing';
import NavBar from './components/NavBar';

export default class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            navBarHeight: 0
        };
    }

    componentDidMount() {
        this._setNavBarHeight();
    }

    componentDidUpdate() {
        if (this.state.navBarHeight !== document.getElementById('navbar').scrollHeight) {
            this._setNavBarHeight();
        }
    }

    _setNavBarHeight = () => this.setState({navBarHeight: document.getElementById('navbar').scrollHeight});

    render() {
        const {logout, history} = this.props;

        return (
            <div className={styles.wrapper}>
                <NavBar
                    history={history}
                    location={this.props.location}
                    logout={logout}
                />
                <div style={{marginTop: this.state.navBarHeight}}>
                    <Routing />
                </div>
            </div>
        );
    }
}
