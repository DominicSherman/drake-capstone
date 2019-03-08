const LOCAL_REDIRECT = 'http://localhost:3000';
const REDIRECT = 'https://drake-capstone.firebaseapp.com';
const LOCAL_CALLBACK = 'http://localhost:5000/drake-capstone/us-central1/auth';
const CALLBACK = 'https://us-central1-drake-capstone.cloudfunctions.net/auth';

const getLocalCallback = (type) => `${LOCAL_CALLBACK}/${type}/callback`;

const getCallback = (type) => `${CALLBACK}/${type}/callback`;

module.exports = {
    getCallbackUri: (type) => process.env.localhost ? getLocalCallback(type) : getCallback(type),
    getRedirectUri: () => process.env.localhost ? LOCAL_REDIRECT : REDIRECT
};
