import rp from 'request-promise';

import {INSTAGRAM_MEDIA, INSTAGRAM_USER_INFO} from '../constants/endpoints';

import {action} from './action';
import {
    SET_CURRENT_VIEW,
    SET_FACEBOOK_ACCESS_TOKEN,
    SET_INSTAGRAM_ACCESS_TOKEN,
    SET_INSTAGRAM_MEDIA,
    SET_INSTAGRAM_USER, SET_TWITTER_ACCESS_TOKEN
} from './actions';

export const setInstagramAccessToken = (accessToken) => action(SET_INSTAGRAM_ACCESS_TOKEN, accessToken);

export const setInstagramUser = () => async (dispatch, getState) => {
    const access_token = getState().instagramAccessToken;

    const userInfoResponse = await rp({
        json: true,
        qs: {access_token},
        uri: INSTAGRAM_USER_INFO
    });

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

export const setFacebookAccessToken = (accessToken) => action(SET_FACEBOOK_ACCESS_TOKEN, accessToken);

export const setTwitterAccessToken = (accessToken) => action(SET_TWITTER_ACCESS_TOKEN, accessToken);

export const setCurrentView = (currentView) => action(SET_CURRENT_VIEW, currentView);
