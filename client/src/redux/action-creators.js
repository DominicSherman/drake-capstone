import rp from 'request-promise';

import {INSTAGRAM_MEDIA, INSTAGRAM_USER_INFO, TWITTER_USER_INFO, TWITTER_MEDIA} from '../constants/endpoints';
import {getAccessTokenSnapshot} from '../services/firebase-service';
import {clearStorage, getUserId} from '../services/local-storage-service';

import {action} from './action';
import {
    RESET_STATE,
    SET_FACEBOOK_ACCESS_TOKEN,
    SET_INSTAGRAM_ACCESS_TOKEN,
    SET_INSTAGRAM_MEDIA,
    SET_INSTAGRAM_USER,
    SET_TWITTER_ACCESS_TOKEN,
    SET_TWITTER_USER,
    SET_TWITTER_MEDIA
} from './actions';

export const setInstagramAccessToken = (userId) => async (dispatch) => {
    await getAccessTokenSnapshot('instagram', userId).then((snapshot) => {
        snapshot.forEach((doc) => {
            if (doc.id === 'instagram') {
                dispatch(action(SET_INSTAGRAM_ACCESS_TOKEN, doc.data().accessToken));
            }
        });
    });
};

export const setFacebookAccessToken = (userId) => async (dispatch) => {
    await getAccessTokenSnapshot('facebook', userId).then((snapshot) => {
        snapshot.forEach((doc) => {
            if (doc.id === 'facebook') {
                dispatch(action(SET_FACEBOOK_ACCESS_TOKEN, doc.data().accessToken));
            }
        });
    });
};

export const setTwitterAccessToken = (userId) => async (dispatch) => {
    await getAccessTokenSnapshot('twitter', userId).then((snapshot) => {
        snapshot.forEach((doc) => {
            if (doc.id === 'twitter') {
                dispatch(action(SET_TWITTER_ACCESS_TOKEN, doc.data().accessToken));
            }
        });
    });
};

export const setInstagramUser = () => async (dispatch, getState) => {
    const access_token = getState().instagramAccessToken;

    const userInfoResponse = await rp({
        json: true,
        qs: {access_token},
        uri: INSTAGRAM_USER_INFO
    });
    console.log('userInfoResponse', userInfoResponse);

    dispatch(action(SET_INSTAGRAM_USER, userInfoResponse.data));
};

export const setInstagramMedia = () => async (dispatch, getState) => {
    const access_token = getState().instagramAccessToken;

    const userMediaResponse = await rp({
        json: true,
        qs: {access_token},
        uri: INSTAGRAM_MEDIA
    });

    dispatch(action(SET_INSTAGRAM_MEDIA, userMediaResponse.data));
};

export const setTwitterUser = () => async (dispatch, getState) => {
    const accessToken = getState().twitterAccessToken;

    const userInfoResponse = await rp({
        json: true,
        qs: {accessToken},
        uri: TWITTER_USER_INFO
    });

    dispatch(action(SET_TWITTER_USER, userInfoResponse.data));
};

export const setTwitterMedia = () => async (dispatch, getState) => {
    const access_token = getState().twitterAccessToken;

    const userMediaResponse = await rp({
        json: true,
        qs: {access_token},
        uri: TWITTER_MEDIA
    });

    dispatch(action(SET_TWITTER_MEDIA, userMediaResponse.data));
};

export const tryToLoadCredentials = () => (dispatch) => {
    const instagramUserId = getUserId('instagram');
    const facebookUserId = getUserId('facebook');
    const twitterUserId = getUserId('twitter');

    if (instagramUserId) {
        dispatch(setInstagramAccessToken(instagramUserId));
    }

    if (facebookUserId) {
        dispatch(setFacebookAccessToken(facebookUserId));
    }

    if (twitterUserId) {
        dispatch(setTwitterAccessToken(twitterUserId));
    }
};

export const logout = () => (dispatch) => {
    clearStorage();
    dispatch(action(RESET_STATE));
};
