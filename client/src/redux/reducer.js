import {INSTAGRAM} from '../constants/view-types';

import {
    SET_CURRENT_VIEW,
    SET_FACEBOOK_ACCESS_TOKEN,
    SET_INSTAGRAM_ACCESS_TOKEN,
    SET_INSTAGRAM_MEDIA,
    SET_INSTAGRAM_USER, SET_TWITTER_ACCESS_TOKEN
} from './actions';

const defaultState = {
    currentView: INSTAGRAM,
    facebookAccessToken: null,
    instagramAccessToken: null,
    instagramMedia: [],
    instagramUser: {},
    twitterAccessToken: null
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

const setTwitterAccessToken = (state, twitterAccessToken) => ({
    ...state,
    twitterAccessToken
});

const setCurrentView = (state, currentView) => ({
    ...state,
    currentView
});

const reducerMap = {
    [SET_CURRENT_VIEW]: setCurrentView,
    [SET_FACEBOOK_ACCESS_TOKEN]: setFacebookAccessToken,
    [SET_INSTAGRAM_ACCESS_TOKEN]: setInstagramAccessToken,
    [SET_INSTAGRAM_MEDIA]: setInstagramMedia,
    [SET_INSTAGRAM_USER]: setInstagramUser,
    [SET_TWITTER_ACCESS_TOKEN]: setTwitterAccessToken
};

export default (state = defaultState, {type, data}) => {
    if (reducerMap[type]) {
        return reducerMap[type](state, data);
    }

    return state;
};
