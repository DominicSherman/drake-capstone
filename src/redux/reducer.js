import {SET_INSTAGRAM_ACCESS_TOKEN, SET_INSTAGRAM_MEDIA, SET_INSTAGRAM_USER} from './actions';

const defaultState = {
    instagramAccessToken: null,
    instagramMedia: [],
    instagramUser: {}
};

const setInstagramAccessToken = (state, instagramAccessToken) => ({
    ...state,
    instagramAccessToken
});

const setInstagramUser = (state, instagramUser) => ({
    ...state,
    instagramUser
});

const setInstagramMedia = (state, instagramMedia) => ({
    ...state,
    instagramMedia
});

const reducerMap = {
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