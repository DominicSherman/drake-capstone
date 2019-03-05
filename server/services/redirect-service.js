const {LOCAL_REDIRECT_URI, REDIRECT_URI} = require('../config');

const getRedirectUri = () => LOCAL_REDIRECT_URI;

module.exports = {
    getInstagramAuthLink: () => `https://api.instagram.com/oauth/authorize/?client_id=${process.env.INSTAGRAM_CLIENT_ID}&redirect_uri=${getRedirectUri()}&response_type=token`
};
