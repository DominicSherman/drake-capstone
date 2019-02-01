import {LOCAL_REDIRECT_URI} from '../config';

export const getRedirectUri = () => {
    if (window.location.hostname === 'localhost') {
        return LOCAL_REDIRECT_URI;
    }
};