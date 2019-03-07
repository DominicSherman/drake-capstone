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
const verifyFunction = (accessToken, refreshToken, profile, done) => {
    done(null, profile, {accessToken});
};

passport.use(new InstagramStrategy(strategyConfig, verifyFunction));

app.use(passport.initialize());
app.use(cors());

app.get('/', (req, res) => {
    res.send('Hello world!');
});

app.get('/instagram', passport.authenticate('instagram', {failureRedirect: getRedirectUri()}));

app.get('/instagram/callback', passport.authenticate('instagram', {failureRedirect: getRedirectUri()}), (req, res) => {
    const accessToken = req.authInfo.accessToken;

    if (accessToken) {
        res.redirect(`${getRedirectUri()}?accessToken=${accessToken}`);
    } else {
        res.redirect(getRedirectUri());
    }
});

module.exports = app;
