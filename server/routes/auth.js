const passport = require('passport');
const uuid = require('uuid');

const {getRedirectUri} = require('../services/url-service');
const {strategies} = require('../services/strategy-service');
const {setToken, getUserSnapshot} = require('../services/database-service');
const {INSTAGRAM_USER_INFO, TWITTER_USER_INFO} = require('../endpoints');
const {app} = require('../app');

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
        const accessToken = req.authInfo.accessToken;
        const userId = uuid.v4();

        console.log('userId', userId);

        setToken(service, userId, accessToken);
        res.redirect(`${getRedirectUri()}/${service}#${service}UserId=${userId}`);
    });
});

module.exports = {app};
