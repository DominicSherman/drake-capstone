import React, {Component} from 'react';
import queryString from 'query-string';
import Button from 'react-bootstrap/Button';

import {getRedirectUri} from '../services/redirect-service';
import {setUserId} from '../services/local-storage-service';

export default class Facebook extends Component {
    componentDidMount() {
        const userId = queryString.parse(window.location.hash).facebookUserId;

        if (userId) {
            setUserId('facebook', userId);
            this.props.setFacebookAccessToken(userId);
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
