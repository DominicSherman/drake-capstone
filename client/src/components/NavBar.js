import React, {Component} from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';

import {ANALYTICS_ROUTE, FACEBOOK_ROUTE, INSTAGRAM_ROUTE, TWITTER_ROUTE} from '../constants/routes';
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
                            isActive={location.pathname === ANALYTICS_ROUTE}
                            name={'Analytics'}
                            onClick={() => history.push(ANALYTICS_ROUTE)}
                        />
                        <NavLink
                            isActive={location.pathname === INSTAGRAM_ROUTE}
                            name={'Instagram'}
                            onClick={() => history.push(INSTAGRAM_ROUTE)}
                        />
                        <NavLink
                            isActive={location.pathname === FACEBOOK_ROUTE}
                            name={'Facebook'}
                            onClick={() => history.push(FACEBOOK_ROUTE)}
                        />
                        <NavLink
                            isActive={location.pathname === TWITTER_ROUTE}
                            name={'Twitter'}
                            onClick={() => history.push(TWITTER_ROUTE)}
                        />
                        <Button
                            onClick={logout}
                            style={{width: '8%'}}
                            variant="outline-light"
                        >
                            {'Logout'}
                        </Button>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}
