import React, {Component} from 'react';
import queryString from 'query-string';
import Button from 'react-bootstrap/Button';

import {getRedirectUri} from '../services/redirect-service';

export default class Facebook extends Component {
    componentDidMount() {
        const accessToken = queryString.parse(window.location.hash).facebookAccessToken;

        if (accessToken) {
            this.props.setFacebookAccessToken(accessToken);
        }
    }

    render() {
        const {facebookAccessToken} = this.props;

        if (!facebookAccessToken) {
            return (
                <Button
                    onClick={() => {
                        window.location.href = getRedirectUri('facebook');
                    }}
                    variant="dark"
                >
                    {'Log in to Facebook'}
                </Button>
            );
        }

        return (
            <div>{'LOGGED IN TO FACEBOOK'}</div>
        );
    }
}
