const INSTAGRAM_URL = 'https://api.instagram.com/v1';
const TWITTER_URL = 'https://data-api.twitter.com/1.1';

const INSTAGRAM_USER_INFO = `${INSTAGRAM_URL}/users/self`;
const INSTAGRAM_MEDIA = `${INSTAGRAM_URL}/users/self/media/recent`;

const TWITTER_USER_INFO = `${TWITTER_URL}/users/show.json`;
const TWITTER_MEDIA = `${TWITTER_URL}/statuses/show.json`;

module.exports = {
    INSTAGRAM_MEDIA,
    INSTAGRAM_USER_INFO,
    TWITTER_USER_INFO
};
