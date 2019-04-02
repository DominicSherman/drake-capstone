const functions = require('firebase-functions');
const admin = require('firebase-admin');

admin.initializeApp(functions.config().firebase);

const db = admin.firestore();

const setToken = (service, userId, accessToken) => db.collection(userId).doc(service).set({
    accessToken
});

const getUserSnapshot = (userId, service) => db.collection(userId).doc(service).get();

module.exports = {
    getUserSnapshot,
    setToken
};
