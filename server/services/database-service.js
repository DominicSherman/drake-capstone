const functions = require('firebase-functions');
const admin = require('firebase-admin');

admin.initializeApp(functions.config().firebase);

const db = admin.firestore();

const setUserData = (service, userId, accessToken, username) => db.collection(userId).doc(service).set({
    accessToken,
    username
});

const getUserSnapshot = (userId, service) => db.collection(userId).doc(service).get();

module.exports = {
    getUserSnapshot,
    setUserData
};
