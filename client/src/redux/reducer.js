import {
    RESET_STATE,
    SET_FACEBOOK_USER_ID,
    SET_INSTAGRAM_USER_ID,
    SET_INSTAGRAM_MEDIA,
    SET_INSTAGRAM_USER,
    SET_TWITTER_USER_ID,
    SET_TWITTER_MEDIA,
    SET_TWITTER_USER, SET_FACEBOOK_USER
} from './actions';

const defaultState = {
    facebookUser: {},
    facebookUserId: null,
    instagramMedia: [],
    instagramUser: {},
    instagramUserId: null,
    twitterMedia: [],
    twitterUser: {},
    twitterUserId: null
};

const setInstagramUserId = (state, instagramUserId) => ({
    ...state,
    instagramUserId
});

const setInstagramMedia = (state, instagramMedia) => ({
    ...state,
    instagramMedia
});

const setInstagramUser = (state, instagramUser) => ({
    ...state,
    instagramUser
});

const setFacebookUserId = (state, facebookUserId) => ({
    ...state,
    facebookUserId
});

const setFacebookUser = (state, facebookUser) => ({
    ...state,
    facebookUser
});

const setTwitterUserId = (state, twitterUserId) => ({
    ...state,
    twitterUserId
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
    [SET_FACEBOOK_USER]: setFacebookUser,
    [SET_FACEBOOK_USER_ID]: setFacebookUserId,
    [SET_INSTAGRAM_MEDIA]: setInstagramMedia,
    [SET_INSTAGRAM_USER]: setInstagramUser,
    [SET_INSTAGRAM_USER_ID]: setInstagramUserId,
    [SET_TWITTER_MEDIA]: setTwitterMedia,
    [SET_TWITTER_USER]: setTwitterUser,
    [SET_TWITTER_USER_ID]: setTwitterUserId
};

export default (state = defaultState, {type, data}) => {
    if (reducerMap[type]) {
        return reducerMap[type](state, data);
    }

    return state;
};
