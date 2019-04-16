const functions = require('firebase-functions');
const Twitter = require('twitter');
const express = require('express');
const cors = require('cors');

const {getUserSnapshot} = require('../services/database-service');
const {TWITTER_USER_INFO, TWITTER_MEDIA} = require('../constants/endpoints');

const app = express();

app.use(cors());

app.get('/user', (req, res) =>
    getUserSnapshot(req.query.userId, 'twitter')
        .then((doc) => {
            const {
                accessToken,
                tokenSecret,
                username
            } = doc.data();

            const client = new Twitter({
                access_token_key: accessToken,
                access_token_secret: tokenSecret,
                consumer_key: functions.config().twitter.client_id,
                consumer_secret: functions.config().twitter.client_secret
            });

            client.get(TWITTER_USER_INFO, {screen_name: username}, (error, data) => {
                if (error) {
                    res.send(error);
                } else {
                    res.send(data);
                }
            });
        })
        .catch((error) => res.send(error))
);

app.get('/media', (req, res) =>
    getUserSnapshot(req.query.userId, 'twitter')
        .then((doc) => {
            const {
                accessToken,
                tokenSecret,
                username
            } = doc.data();

            const client = new Twitter({
                access_token_key: accessToken,
                access_token_secret: tokenSecret,
                consumer_key: functions.config().twitter.client_id,
                consumer_secret: functions.config().twitter.client_secret
            });

            client.get(TWITTER_MEDIA, {screen_name: username}, (error, data) => {
                if (error) {
                    res.send(error);
                } else {
                    res.send(data);
                }
            });
        })
        .catch((error) => res.send(error))
);

module.exports = {app};
