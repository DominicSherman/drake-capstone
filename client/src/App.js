import React, {Component} from 'react';
import LoadingScreen from 'react-loading-screen';

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
        const {logout, history, loading} = this.props;

        return (
            <div className={styles.wrapper}>
                <NavBar
                    history={history}
                    location={this.props.location}
                    logout={logout}
                />
                <LoadingScreen
                    bgColor={'#f1f1f1'}
                    loading={loading}
                    spinnerColor={'#00539F'}
                >
                    <div style={{marginTop: this.state.navBarHeight}}>
                        <Routing />
                    </div>
                </LoadingScreen>
            </div>
        );
    }
}
