const express = require('express');
const passport = require('passport');
const cors = require('cors');
const rp = require('request-promise');
const InstagramStrategy = require('passport-instagram').Strategy;

require('dotenv').config();

const app = express();
const port = 3001;

passport.serializeUser(function (user, done) {
    done(null, user);
});

passport.deserializeUser(function (user, done) {
    done(null, user);
});

const strategyConfig = {
    callbackURL: 'http://localhost:3001/auth/instagram/callback',
    clientID: process.env.INSTAGRAM_CLIENT_ID,
    clientSecret: process.env.INSTAGRAM_CLIENT_SECRET
};
const successFunction = (accessToken, refreshToken, profile, done) => {
    done(null, profile, {accessToken});
};

passport.use(new InstagramStrategy(strategyConfig, successFunction));

app.use(passport.initialize());
app.use(cors());

app.get('/', (req, res) => res.send('Hello world!'));

app.get('/auth/instagram', passport.authenticate('instagram'));

app.get('/auth/instagram/callback', passport.authenticate('instagram'), (req, res) => {
    console.log('req.authInfo.accessToken', req.authInfo.accessToken);
    res.redirect(`http://localhost:3000?accessToken=${req.authInfo.accessToken}`);
});

app.listen(port, () => console.log(`Listening at http://localhost:${port}/`));
