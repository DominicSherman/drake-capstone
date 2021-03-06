const passport = require('passport');
const uuid = require('uuid');
const express = require('express');
const expressSession = require('express-session');
const cors = require('cors');

const {getRedirectUri} = require('../services/url-service');
const {strategies} = require('../services/strategy-service');
const {setUserData} = require('../services/database-service');

const app = express();

app.use(expressSession({
    resave: true,
    saveUninitialized: true,
    secret: 'keyboard cat'
}));
app.use(cors());
app.use(passport.initialize());
app.use(passport.session());

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
        const {accessToken, tokenSecret} = req.authInfo;
        const {username, displayName, id} = req.user;
        const name = username ? username : displayName;
        const userId = uuid.v4();

        setUserData(service, userId, accessToken, tokenSecret, name, id);
        res.redirect(`${getRedirectUri()}/${service}#${service}UserId=${userId}`);
    });
});

module.exports = {app};
