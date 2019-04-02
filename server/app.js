const express = require('express');
const passport = require('passport');
const cors = require('cors');
const expressSession = require('express-session');
const uuid = require('uuid');
const request = require('request');

const {getRedirectUri} = require('./services/url-service');
const {strategies} = require('./services/strategy-service');
const {setToken, getUserSnapshot} = require('./services/database-service');
const {INSTAGRAM_USER_INFO, TWITTER_USER_INFO} = require('./endpoints');

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
        const accessToken = req.authInfo.accessToken;
        const userId = uuid.v4();

        console.log('userId', userId);

        setToken(service, userId, accessToken);
        res.redirect(`${getRedirectUri()}/${service}#${service}UserId=${userId}`);
    });
});

app.get('/instagram/user', async (req, res) => {
    await getUserSnapshot(req.query.userId, 'instagram').then((snapshot) => {
        console.log('snapshot', snapshot);
        console.log('snapshot.data()', snapshot.data());
        console.log('snapshot.length', snapshot.length);
        console.log('snapshot.exists', snapshot.exists);
        for (let i = 0; i < snapshot.length; i++) {
            console.log('snapshot[i]', snapshot[i]);
        }
    });
});

app.get('/twitter/user', async (req, res) => {
    const response = await request({
        json: true,
        qs: {
            access_token: req.params.accessToken
        },
        uri: TWITTER_USER_INFO
    });

    console.log('response.data', response.data);
});

module.exports = app;
