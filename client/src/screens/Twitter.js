import React, {Component} from 'react';
import queryString from 'query-string';
import Button from 'react-bootstrap/Button';

import {getRedirectUri} from '../services/redirect-service';
import {setUserId} from '../services/local-storage-service';

export default class Twitter extends Component {
    componentDidMount() {
        const userId = queryString.parse(window.location.hash).twitterUserId;

        if (userId) {
            setUserId('twitter', userId);
            this.props.setTwitterAccessToken(userId);
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
