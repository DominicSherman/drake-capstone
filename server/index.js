const express = require('express');
const passport = require('passport');
const InstagramStrategy = require('passport-instagram').Strategy;

const {getInstagramAuthLink} = require('./services/redirect-service');

require('dotenv').config();

const app = express();
const port = 3001;

const strategyConfig = {
    callbackURL: 'http://localhost:3000',
    clientID: process.env.INSTAGRAM_CLIENT_ID,
    clientSecret: process.env.INSTAGRAM_CLIENT_SECRET
};
const successFunction = (accessToken, refreshToken, profile, done) => {
    process.nextTick(() => done(null, profile));
};

passport.use(new InstagramStrategy(strategyConfig, successFunction));

app.use(passport.initialize());

app.get('/', (req, res) => res.send('Hello world!'));

app.get('/auth/instagram', () => {
    passport.authenticate('instagram');
});

app.listen(port, () => console.log(`Listening at http://localhost:${port}/`));
