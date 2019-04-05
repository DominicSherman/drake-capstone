const functions = require('firebase-functions');
const rp = require('request-promise');
const express = require('express');
const cors = require('cors');
const hmacsha1 = require('hmacsha1');

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

            let baseString = '',
                headerString = 'OAuth ';

            const dataWithoutSignature = {
                include_entities: true,
                oauth_consumer_key: functions.config().twitter.client_id,
                oauth_nonce: Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15),
                oauth_signature_method: 'HMAC-SHA1',
                oauth_timestamp: Math.round(Date.now() / 1000),
                oauth_token: accessToken,
                oauth_version: '1.0',
                screen_name: username
            };

            Object.keys(dataWithoutSignature).forEach((key, index) => {
                baseString = `${baseString}${key}=${encodeURIComponent(dataWithoutSignature[key])}`;

                if (index < Object.keys(dataWithoutSignature).length - 1) {
                    baseString = `${baseString}&`;
                }
            });

            baseString = `GET&${encodeURIComponent(TWITTER_USER_INFO)}&${encodeURIComponent(baseString)}`;
            const signingKey = `${functions.config().twitter.client_secret}&${tokenSecret}`;

            const oauth_signature = hmacsha1(signingKey, baseString);

            const data = {
                ...dataWithoutSignature,
                oauth_signature
            };

            delete data.include_entities;
            delete data.screen_name;

            Object.keys(data).forEach((key, index) => {
                headerString = `${headerString}${key}="${encodeURIComponent(data[key])}"`;

                if (index < Object.keys(data).length - 1) {
                    headerString = `${headerString},`;
                }
            });

            console.log('headerString', headerString);

            const response = await rp({
                headers: {
                    'Authorization': headerString
                },
                json: true,
                qs: {
                    screen_name: username
                },
                uri: TWITTER_USER_INFO
            });

            console.log('response', response);

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
