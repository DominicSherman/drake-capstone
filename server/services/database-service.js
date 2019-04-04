const functions = require('firebase-functions');
const admin = require('firebase-admin');

admin.initializeApp(functions.config().firebase);

const db = admin.firestore();

const setUserData = (service, userId, accessToken, username, id) => db.collection(userId).doc(service).set({
    accessToken,
    id,
    username
});

const getUserSnapshot = (userId, service) => db.collection(userId).doc(service).get();

module.exports = {
    getUserSnapshot,
    setUserData
};
