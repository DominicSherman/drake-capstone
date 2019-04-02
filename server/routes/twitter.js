const rp = require('request-promise');
const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
const {getUserSnapshot} = require('../services/database-service');
const {TWITTER_USER_INFO, TWITTER_MEDIA} = require('../endpoints');

app.get('/user', (req, res) =>
    getUserSnapshot(req.query.userId, 'twitter')
        .then(async (doc) => {
            const {
                accessToken,
                username
            } = doc.data();

            console.log('accessToken', accessToken);

            const response = await rp({
                headers: {
                    authorization: `Bearer ${accessToken}`
                },
                json: true,
                qs: {
                    screen_name: username
                },
                uri: TWITTER_USER_INFO
            });

            res.send(response.data);
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