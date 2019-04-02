const functions = require('firebase-functions');

const auth = require('./routes/auth').app;
const instagram = require('./routes/instagram').app;

module.exports = {
    auth: functions.https.onRequest(auth),
    instagram: functions.https.onRequest(instagram)
};
