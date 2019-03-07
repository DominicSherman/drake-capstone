const express = require('express');
const passport = require('passport');
const cors = require('cors');

const {getRedirectUri} = require('./config');
const {strategies} = require('./strategies');

require('dotenv').config();

const app = express();

passport.serializeUser((user, done) => {
    done(null, user);
});

passport.deserializeUser((user, done) => {
    done(null, user);
});

strategies.forEach((strategy) => passport.use(strategy));

app.use(passport.initialize());
app.use(cors());

app.get('/', (req, res) => {
    res.send('Hello world!');
});

app.get('/instagram', passport.authenticate('instagram'));

app.get('/instagram/callback', passport.authenticate('instagram'), (req, res) => {
    const accessToken = req.authInfo.accessToken;

    res.redirect(`${getRedirectUri()}#instagramAccessToken=${accessToken}`);
});

app.get('/facebook', passport.authenticate('facebook'));

app.get('/facebook/callback', passport.authenticate('facebook'), (req, res) => {
    const accessToken = req.authInfo.accessToken;

    res.redirect(`${getRedirectUri()}#facebookAccessToken=${accessToken}`);
});

module.exports = app;
