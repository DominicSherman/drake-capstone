import {action} from './action';
import {SET_INSTAGRAM_MEDIA, SET_INSTAGRAM_USER} from './actions';

export const setInstagramUser = (instagramUser) => action(SET_INSTAGRAM_USER, instagramUser);
export const setInstagramMedia = (instagramMedia) => action(SET_INSTAGRAM_MEDIA, instagramMedia);