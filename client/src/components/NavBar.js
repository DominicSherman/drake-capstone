import React, {Component} from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';

import {ANALYTICS, FACEBOOK, INSTAGRAM, TWITTER} from '../routes';
import styles from '../css/components/NavBar.module.css';

import NavLink from './NavLink';

export default class NavBar extends Component {
    render() {
        const {history, logout, location} = this.props;

        return (
            <Navbar
                bg={'dark'}
                className={styles.wrapper}
                collapseOnSelect
                expand={'xl'}
                fixed={'top'}
                id={'navbar'}
                variant={'dark'}
            >
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse>
                    <Nav className={styles.textWrapper}>
                        <NavLink
                            isActive={location.pathname === ANALYTICS}
                            name={'Analytics'}
                            onClick={() => history.push(ANALYTICS)}
                        />
                        <NavLink
                            isActive={location.pathname === INSTAGRAM}
                            name={'Instagram'}
                            onClick={() => history.push(INSTAGRAM)}
                        />
                        <NavLink
                            isActive={location.pathname === FACEBOOK}
                            name={'Facebook'}
                            onClick={() => history.push(FACEBOOK)}
                        />
                        <NavLink
                            isActive={location.pathname === TWITTER}
                            name={'Twitter'}
                            onClick={() => history.push(TWITTER)}
                        />
                        <Button
                            onClick={logout}
                            style={{width: '8%'}}
                        >
                            {'Logout'}
                        </Button>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}
