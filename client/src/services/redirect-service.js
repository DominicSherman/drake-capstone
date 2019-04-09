import {LOCAL_REDIRECT_URI, REDIRECT_URI} from '../constants/urls';

export const getRedirectUri = (service) => {
    if (window.location.hostname === 'localhost') {
        return `${LOCAL_REDIRECT_URI}/${service}`;
    }

    return `${REDIRECT_URI}/${service}`;
};
