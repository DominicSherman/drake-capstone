import firebase from 'firebase/app';
import 'firebase/firestore';

import {config} from '../config';

let isInitialized = false;

export const initializeFirebase = () => {
    if (!isInitialized) {
        firebase.initializeApp(config);
        isInitialized = true;
    }
};

export const getAccessTokenSnapshot = (service, userId) => firebase.firestore().collection(userId).get();
