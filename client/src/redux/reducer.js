import {INSTAGRAM} from '../constants/view-types';

import {
    SET_CURRENT_VIEW,
    SET_FACEBOOK_ACCESS_TOKEN, SET_FACEBOOK_MEDIA, SET_FACEBOOK_USER,
    SET_INSTAGRAM_ACCESS_TOKEN,
    SET_INSTAGRAM_MEDIA,
    SET_INSTAGRAM_USER
} from './actions';

const defaultState = {
    currentView: INSTAGRAM,
    facebookAccessToken: null,
    facebookMedia: [],
    facebookUser: {},
    instagramAccessToken: null,
    instagramMedia: [],
    instagramUser: {}
};

const setInstagramAccessToken = (state, instagramAccessToken) => ({
    ...state,
    instagramAccessToken
});

const setInstagramMedia = (state, instagramMedia) => ({
    ...state,
    instagramMedia
});

const setInstagramUser = (state, instagramUser) => ({
    ...state,
    instagramUser
});

const setFacebookAccessToken = (state, facebookAccessToken) => ({
    ...state,
    facebookAccessToken
});

const setFacebookMedia = (state, facebookMedia) => ({
    ...state,
    facebookMedia
});

const setFacebookUser = (state, facebookUser) => ({
    ...state,
    facebookUser
});

const setCurrentView = (state, currentView) => ({
    ...state,
    currentView
});

const reducerMap = {
    [SET_CURRENT_VIEW]: setCurrentView,
    [SET_FACEBOOK_ACCESS_TOKEN]: setFacebookAccessToken,
    [SET_FACEBOOK_MEDIA]: setFacebookMedia,
    [SET_FACEBOOK_USER]: setFacebookUser,
    [SET_INSTAGRAM_ACCESS_TOKEN]: setInstagramAccessToken,
    [SET_INSTAGRAM_MEDIA]: setInstagramMedia,
    [SET_INSTAGRAM_USER]: setInstagramUser
};

export default (state = defaultState, {type, data}) => {
    if (reducerMap[type]) {
        return reducerMap[type](state, data);
    }

    return state;
};
