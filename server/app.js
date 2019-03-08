require('dotenv').config();
const express = require('express');
const passport = require('passport');
const cors = require('cors');
const expressSession = require('express-session');

const {getRedirectUri} = require('./services/url-service');
const {strategies} = require('./services/strategy-service');

const app = express();

app.use(expressSession({
    resave: true,
    saveUninitialized: true,
    secret: 'keyboard cat'
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(cors());

passport.serializeUser((user, done) => {
    done(null, user);
});
passport.deserializeUser((user, done) => {
    done(null, user);
});

strategies.forEach((strategy) => passport.use(strategy));

const services = ['instagram', 'facebook', 'twitter'];

services.forEach((service) => {
    app.get(`/${service}`, passport.authenticate(service));

    app.get(`/${service}/callback`, passport.authenticate(service), (req, res) => {
        res.redirect(`${getRedirectUri()}#${service}AccessToken=${req.authInfo.accessToken}`);
    });
});

module.exports = app;
