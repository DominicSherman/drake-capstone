import {SET_INSTAGRAM_MEDIA, SET_INSTAGRAM_USER} from './actions';

const defaultState = {
    instagramMedia: [],
    instagramUser: {}
};

const setInstagramUser = (state, instagramUser) => ({
    ...state,
    instagramUser
});

const setInstagramMedia = (state, instagramMedia) => ({
    ...state,
    instagramMedia
});

const reducerMap = {
    [SET_INSTAGRAM_MEDIA]: setInstagramMedia,
    [SET_INSTAGRAM_USER]: setInstagramUser
};

export default (state = defaultState, {type, data}) => {
    if (reducerMap[type]) {
        return reducerMap[type](state, data);
    }

    return state;
};