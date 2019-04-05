const functions = require('firebase-functions');
const rp = require('request-promise');
const express = require('express');
const cors = require('cors');
const Twitter = require('twitter');

const app = express();

app.use(cors());
const {getUserSnapshot} = require('../services/database-service');
const {TWITTER_USER_INFO, TWITTER_MEDIA} = require('../endpoints');

app.get('/user', (req, res) =>
    getUserSnapshot(req.query.userId, 'twitter')
        .then(async (doc) => {
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

            const profilePicture = await rp(`https://twitter.com/(${username})/profile_image?size=original`);

            console.log('profilePicture', profilePicture);

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
        .then(async (doc) => {
            const {accessToken} = doc.data();

            const response = await rp({
                json: true,
                qs: {access_token: accessToken},
                uri: TWITTER_MEDIA
            });

            res.send(response.data);
        })
        .catch((error) => res.send(error))
);

module.exports = {app};
