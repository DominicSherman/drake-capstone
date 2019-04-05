import React, {Component} from 'react';
import Button from 'react-bootstrap/Button';

import {getRedirectUri} from '../services/redirect-service';

const capitalize = (string) => string.charAt(0).toUpperCase() + string.slice(1);

export default class LoginButton extends Component {
    render() {
        return (
            <Button
                onClick={() => {
                    window.location.href = getRedirectUri(this.props.service);
                }}
                variant="dark"
            >
                {`Log in to ${capitalize(this.props.service)}`}
            </Button>
        );
    }
}
