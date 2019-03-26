import React, {Component} from 'react';
import Button from 'react-bootstrap/Button';
import {Link} from 'react-router-dom';

export default class NavLink extends Component {
    render() {
        return (
            <Link
                to={this.props.route}
                style={{width: '100%'}}
            >
                <Button
                    size={'90'}
                    variant={'secondary'}
                >
                    {this.props.name}
                </Button>
            </Link>
        );
    }
}
