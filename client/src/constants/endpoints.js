import {LOCAL_SERVER_URI} from './urls';

const INSTAGRAM_URL = 'https://api.instagram.com/v1';
const TWITTER_URL = 'https://data-api.twitter.com/1.1';

export const INSTAGRAM_USER_INFO = `${INSTAGRAM_URL}/users/self`;
export const INSTAGRAM_MEDIA = `${INSTAGRAM_URL}/users/self/media/recent`;

export const TWITTER_USER_INFO = `${LOCAL_SERVER_URI}/twitter/user`;
export const TWITTER_MEDIA = `${TWITTER_URL}/statuses/show.json`;
