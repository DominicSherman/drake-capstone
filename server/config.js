const LOCAL_REDIRECT = 'http://localhost:3000';
const REDIRECT = 'https://drake-capstone.firebaseapp.com';
const LOCAL_CALLBACK = 'http://localhost:5000/drake-capstone/us-central1/auth/instagram/callback';
const CALLBACK = 'https://us-central1-drake-capstone.cloudfunctions.net/auth/instagram/callback';

module.exports = {
    getCallbackUri: () => process.env.localhost ? LOCAL_CALLBACK : CALLBACK,
    getRedirectUri: () => process.env.localhost ? LOCAL_REDIRECT : REDIRECT
};
