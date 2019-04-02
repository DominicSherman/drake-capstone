import rp from 'request-promise';

import {INSTAGRAM_MEDIA, INSTAGRAM_USER_INFO, TWITTER_MEDIA, TWITTER_USER_INFO} from '../constants/endpoints';
import {clearStorage, getUserId, setUserId} from '../services/local-storage-service';

import {action} from './action';
import {
    RESET_STATE,
    SET_FACEBOOK_USER_ID,
    SET_INSTAGRAM_MEDIA,
    SET_INSTAGRAM_USER,
    SET_INSTAGRAM_USER_ID,
    SET_TWITTER_MEDIA,
    SET_TWITTER_USER,
    SET_TWITTER_USER_ID
} from './actions';

export const setInstagramUserId = (userId) => (dispatch) => {
    setUserId('instagram', userId);
    dispatch(action(SET_INSTAGRAM_USER_ID, userId));
};

export const setFacebookUserId = (userId) => (dispatch) => {
    setUserId('facebook', userId);
    dispatch(action(SET_FACEBOOK_USER_ID, userId));
};

export const setTwitterUserId = (userId) => (dispatch) => {
    setUserId('twitter', userId);
    dispatch(action(SET_TWITTER_USER_ID, userId));
};

export const setInstagramUser = () => async (dispatch, getState) => {
    const userId = getState().instagramUserId;

    const userInfoResponse = await rp({
        json: true,
        qs: {userId},
        uri: INSTAGRAM_USER_INFO
    });

    dispatch(action(SET_INSTAGRAM_USER, userInfoResponse.data));
};

export const setInstagramMedia = () => async (dispatch, getState) => {
    const userId = getState().instagramUserId;

    const userMediaResponse = await rp({
        json: true,
        qs: {userId},
        uri: INSTAGRAM_MEDIA
    });

    dispatch(action(SET_INSTAGRAM_MEDIA, userMediaResponse.data));
};

export const setTwitterUser = () => async (dispatch, getState) => {
    const userId = getState().twitterUserId;

    const userInfoResponse = await rp({
        json: true,
        qs: {userId},
        uri: TWITTER_USER_INFO
    });

    dispatch(action(SET_TWITTER_USER, userInfoResponse.data));
};

export const setTwitterMedia = () => async (dispatch, getState) => {
    const userId = getState().twitterUserId;

    const userMediaResponse = await rp({
        json: true,
        qs: {userId},
        uri: TWITTER_MEDIA
    });

    dispatch(action(SET_TWITTER_MEDIA, userMediaResponse.data));
};

export const tryToLoadCredentials = () => (dispatch) => {
    const instagramUserId = getUserId('instagram');
    const facebookUserId = getUserId('facebook');
    const twitterUserId = getUserId('twitter');

    if (instagramUserId) {
        dispatch(setInstagramUserId(instagramUserId));
    }

    if (facebookUserId) {
        dispatch(setFacebookUserId(facebookUserId));
    }

    if (twitterUserId) {
        dispatch(setTwitterUserId(twitterUserId));
    }
};

export const logout = () => (dispatch) => {
    clearStorage();
    dispatch(action(RESET_STATE));
};
