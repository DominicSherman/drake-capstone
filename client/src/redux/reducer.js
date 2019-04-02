import {
    RESET_STATE,
    SET_FACEBOOK_ACCESS_TOKEN,
    SET_INSTAGRAM_ACCESS_TOKEN,
    SET_INSTAGRAM_MEDIA,
    SET_INSTAGRAM_USER,
    SET_TWITTER_ACCESS_TOKEN,
    SET_TWITTER_MEDIA,
    SET_TWITTER_USER
} from './actions';

const defaultState = {
    facebookAccessToken: null,
    instagramAccessToken: null,
    instagramMedia: [],
    instagramUser: {},
    twitterAccessToken: null,
    twitterMedia: [],
    twitterUser: {}
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

const setTwitterUser = (state, twitterUser) => ({
    ...state,
    twitterUser
});

const setTwitterMedia = (state, twitterMedia) => ({
    ...state,
    twitterMedia
});

const resetState = () => defaultState;

const reducerMap = {
    [RESET_STATE]: resetState,
    [SET_FACEBOOK_ACCESS_TOKEN]: setFacebookAccessToken,
    [SET_INSTAGRAM_ACCESS_TOKEN]: setInstagramAccessToken,
    [SET_INSTAGRAM_MEDIA]: setInstagramMedia,
    [SET_INSTAGRAM_USER]: setInstagramUser,
    [SET_TWITTER_ACCESS_TOKEN]: setTwitterAccessToken,
    [SET_TWITTER_USER]: setTwitterUser,
    [SET_TWITTER_MEDIA]: setTwitterMedia
};

export default (state = defaultState, {type, data}) => {
    if (reducerMap[type]) {
        return reducerMap[type](state, data);
    }

    return state;
};
