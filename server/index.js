const functions = require('firebase-functions');

const app = require('./app');

exports.auth = functions.https.onRequest(app);
