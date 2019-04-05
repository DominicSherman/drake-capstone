const INSTAGRAM_URL = 'https://api.instagram.com/v1';
const FACEBOOK_URL = 'https://graph.facebook.com/v3.2';

const INSTAGRAM_USER_INFO = `${INSTAGRAM_URL}/users/self`;
const INSTAGRAM_MEDIA = `${INSTAGRAM_URL}/users/self/media/recent`;

const TWITTER_USER_INFO = 'users/show.json';
const TWITTER_MEDIA = 'statuses/show.json';

const FACEBOOK_USER_INFO = `${FACEBOOK_URL}/me?fields=id,name,friends`;

module.exports = {
    FACEBOOK_URL,
    FACEBOOK_USER_INFO,
    INSTAGRAM_MEDIA,
    INSTAGRAM_USER_INFO,
    TWITTER_MEDIA,
    TWITTER_USER_INFO
};
