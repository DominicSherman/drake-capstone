const rp = require('request-promise');
const express = require('express');
const cors = require('cors');

const {getUserSnapshot} = require('../services/database-service');
const {INSTAGRAM_USER_INFO, INSTAGRAM_MEDIA} = require('../constants/endpoints');

const app = express();

app.use(cors());

app.get('/user', (req, res) =>
    getUserSnapshot(req.query.userId, 'instagram')
        .then(async (doc) => {
            const {
                accessToken,
                id
            } = doc.data();

            const response = await rp({
                json: true,
                qs: {access_token: accessToken},
                uri: `${INSTAGRAM_USER_INFO}/${id}/info`
            });

            res.send(response.user);
        })
        .catch((error) => res.send(error))
);

app.get('/media', (req, res) =>
    getUserSnapshot(req.query.userId, 'instagram')
        .then(async (doc) => {
            const {accessToken} = doc.data();

            const response = await rp({
                json: true,
                qs: {access_token: accessToken},
                uri: INSTAGRAM_MEDIA
            });

            res.send(response.data);
        })
        .catch((error) => res.send(error))
);

module.exports = {app};
