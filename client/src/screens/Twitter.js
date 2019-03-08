import React, {Component} from 'react';
import queryString from 'query-string';
import Button from 'react-bootstrap/Button';

import {getRedirectUri} from '../services/redirect-service';

export default class Twitter extends Component {
    componentDidMount() {
        const accessToken = queryString.parse(window.location.hash).twitterAccessToken;

        if (accessToken) {
            this.props.setTwitterAccessToken(accessToken);
        }
    }

    render() {
        const {twitterAccessToken} = this.props;

        if (!twitterAccessToken) {
            return (
                <Button
                    onClick={() => {
                        window.location.href = getRedirectUri('twitter');
                    }}
                    variant="dark"
                >
                    {'Log in to Twitter'}
                </Button>
            );
        }

        return (
            <div>{'LOGGED IN TO TWITTER'}</div>
        );
    }
}
