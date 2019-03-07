import {LOCAL_REDIRECT_URI, REDIRECT_URI} from '../constants/urls';

export const getRedirectUri = (type) => {
    if (window.location.hostname === 'localhost') {
        return `${LOCAL_REDIRECT_URI}/${type}`;
    }

    return `${REDIRECT_URI}/${type}`;
};
