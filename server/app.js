const express = require('express');
const passport = require('passport');
const functions = require('firebase-functions');
const cors = require('cors');
const InstagramStrategy = require('passport-instagram').Strategy;

const {getCallbackUri, getRedirectUri} = require('./config');

require('dotenv').config();

const app = express();

passport.serializeUser((user, done) => {
    done(null, user);
});

passport.deserializeUser((user, done) => {
    done(null, user);
});

const strategyConfig = {
    callbackURL: getCallbackUri(),
    clientID: functions.config().instagram.client_id,
    clientSecret: functions.config().instagram.client_secret
};
const successFunction = (accessToken, refreshToken, profile, done) => {
    console.log('profile, accessToken', profile, accessToken);
    done(null, profile, {accessToken});
};

passport.use(new InstagramStrategy(strategyConfig, successFunction));

app.use(passport.initialize());
app.use(cors());

app.get('/instagram', passport.authenticate('instagram', {failureRedirect: getRedirectUri()}));

app.get('/instagram/callback', passport.authenticate('instagram'), (req, res) => {
    const accessToken = req.authInfo.accessToken;

    if (accessToken) {
        res.redirect(`${getRedirectUri()}?accessToken=${accessToken}`);
    } else {
        res.redirect(getRedirectUri());
    }
});

module.exports = app;
