import {INSTAGRAM_LOCAL_REDIRECT_URI, INSTAGRAM_REDIRECT_URI} from '../config';

export const getInstagramRedirectUri = () => {
    if (window.location.hostname === 'localhost') {
        return INSTAGRAM_LOCAL_REDIRECT_URI;
    }

    return INSTAGRAM_REDIRECT_URI;
};
