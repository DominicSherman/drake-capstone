import React, {Component} from 'react';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Button from 'react-bootstrap/Button';

import styles from './css/App.module.css';
import Routing from './Routing';
import NavLink from './components/NavLink';
import {ANALYTICS, FACEBOOK, INSTAGRAM, TWITTER} from './routes';

export default class App extends Component {
    render() {
        const {logout} = this.props;

        return (
            <div className={styles.wrapper}>
                <div
                    style={{
                        marginBottom: 15,
                        width: '100%'
                    }}
                >
                    <Button
                        onClick={logout}
                        style={{width: '8%'}}
                    >
                        {'Logout'}
                    </Button>
                </div>
                <ButtonGroup
                    className={styles.buttonGroupWrapper}
                >
                    <NavLink
                        name={'Analytics'}
                        route={ANALYTICS}
                    />
                    <NavLink
                        name={'Instagram'}
                        route={INSTAGRAM}
                    />
                    <NavLink
                        name={'Facebook'}
                        route={FACEBOOK}
                    />
                    <NavLink
                        name={'Twitter'}
                        route={TWITTER}
                    />
                </ButtonGroup>
                <Routing />
            </div>
        );
    }
}
