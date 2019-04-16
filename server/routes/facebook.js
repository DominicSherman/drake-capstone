const rp = require('request-promise');
const express = require('express');
const cors = require('cors');

const {getUserSnapshot} = require('../services/database-service');
const {FACEBOOK_USER_INFO, FACEBOOK_URL} = require('../constants/endpoints');

const app = express();

app.use(cors());

app.get('/user', (req, res) =>
    getUserSnapshot(req.query.userId, 'facebook')
        .then(async (doc) => {
            const {accessToken, id} = doc.data();

            const [user, picture] = await Promise.all([
                rp({
                    json: true,
                    qs: {access_token: accessToken},
                    uri: FACEBOOK_USER_INFO
                }),
                rp({
                    json: true,
                    qs: {
                        access_token: accessToken,
                        redirect: 0,
                        width: 999
                    },
                    uri: `${FACEBOOK_URL}/${id}/picture`
                })
            ]);

            res.send({
                ...user,
                profileUrl: picture.data.url
            });
        })
        .catch((error) => res.send(error))
);

app.get('/media', (req, res) =>
    getUserSnapshot(req.query.userId, 'facebook')
        .then(async (doc) => {
            const {accessToken, id} = doc.data();

            const {data} = await rp({
                json: true,
                qs: {access_token: accessToken},
                uri: `${FACEBOOK_URL}/${id}/posts?limit=50`
            });
            const likes = await Promise.all(data.map((post) => rp({
                json: true,
                qs: {access_token: accessToken},
                uri: `${FACEBOOK_URL}/${post.id}/likes?summary=true`
            })));

            const dataWithLikes = data.map((post, index) => ({
                ...post,
                likes: likes[index].summary ? likes[index].summary.total_count : 0
            }));

            res.send(dataWithLikes);
        })
        .catch((error) => res.send(error))
);

module.exports = {app};
