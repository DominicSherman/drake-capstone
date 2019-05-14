//

const INSTAGRAM_URL = 'https://api.instagram.com/v1';
const INSTAGRAM_USER_INFO = 'https://i.instagram.com/api/v1/users';
const INSTAGRAM_MEDIA = `${INSTAGRAM_URL}/users/self/media/recent`;

const FACEBOOK_URL = 'https://graph.facebook.com/v3.2';
const FACEBOOK_USER_INFO = `${FACEBOOK_URL}/me?fields=id,name,friends,age_range,birthday,location,quotes`;

const TWITTER_USER_INFO = 'users/show.json';
const TWITTER_MEDIA = 'statuses/user_timeline.json?exclude_replies=true&include_rts=false&count=100';

module.exports = {
    FACEBOOK_URL,
    FACEBOOK_USER_INFO,
    INSTAGRAM_MEDIA,
    INSTAGRAM_USER_INFO,
    TWITTER_MEDIA,
    TWITTER_USER_INFO
};
