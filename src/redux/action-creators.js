import {action} from './action';
import {SET_INSTAGRAM_ACCESS_TOKEN, SET_INSTAGRAM_MEDIA, SET_INSTAGRAM_USER} from './actions';
import rp from 'request-promise';
import {INSTAGRAM_MEDIA, INSTAGRAM_USER_INFO} from '../constants/endpoints';

export const setInstagramAccessToken = (accessToken) => action(SET_INSTAGRAM_ACCESS_TOKEN, accessToken);

export const setInstagramUser = () => async (dispatch, getState) => {
    const access_token = getState().instagramAccessToken;

    const userInfoResponse = await rp({
        uri: INSTAGRAM_USER_INFO,
        qs: {access_token},
        json: true
    });

    dispatch(action(SET_INSTAGRAM_USER, userInfoResponse.data));
};

export const setInstagramMedia = () => async (dispatch, getState) => {
    const access_token = getState().instagramAccessToken;

    const userMediaResponse = await rp({
        uri: INSTAGRAM_MEDIA,
        qs: {access_token},
        json: true
    });

    dispatch(action(SET_INSTAGRAM_MEDIA, userMediaResponse.data));
};