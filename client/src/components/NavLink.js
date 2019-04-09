import React, {Component} from 'react';
import Nav from 'react-bootstrap/Nav';

import styles from '../css/components/NavLink.module.css';

export default class NavLink extends Component {
    render() {
        const {isActive, onClick, name} = this.props;

        return (
            <Nav.Link
                className={styles.link}
                onClick={onClick}
            >
                <div className={styles.navLinkWrapper}>
                    <p className={isActive ? styles.selectedNavLink : styles.navLink}>
                        {name}
                    </p>
                </div>
            </Nav.Link>
        );
    }
}
