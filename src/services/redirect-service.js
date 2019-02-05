import {INSTAGRAM_CLIENT_ID, LOCAL_REDIRECT_URI, REDIRECT_URI} from '../config';

export const getRedirectUri = () => {
    if (window.location.hostname === 'localhost') {
        return LOCAL_REDIRECT_URI;
    }

    return REDIRECT_URI;
};

export const getInstagramAuthLink = () => `https://api.instagram.com/oauth/authorize/?client_id=${INSTAGRAM_CLIENT_ID}&redirect_uri=${getRedirectUri()}&response_type=token`;
