const functions = require('firebase-functions');
const InstagramStrategy = require('passport-instagram').Strategy;
const FacebookStrategy = require('passport-facebook').Strategy;

const {getCallbackUri} = require('./config');

const verifyFunction = (accessToken, refreshToken, profile, done) => {
    done(null, profile, {accessToken});
};

const instagramConfig = {
    callbackURL: getCallbackUri('instagram'),
    clientID: functions.config().instagram.client_id,
    clientSecret: functions.config().instagram.client_secret
};

const facebookConfig = {
    callbackURL: getCallbackUri('facebook'),
    clientID: functions.config().facebook.client_id,
    clientSecret: functions.config().facebook.client_secret
};

module.exports = {
    strategies: [
        new InstagramStrategy(instagramConfig, verifyFunction),
        new FacebookStrategy(facebookConfig, verifyFunction)
    ]
};
