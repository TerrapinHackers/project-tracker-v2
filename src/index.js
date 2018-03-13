import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import ReactRouter from 'react-router';
import registerServiceWorker from './registerServiceWorker';

import * as firebase from 'firebase';
import firestore from 'firebase/firestore';

var config = {
    apiKey: "AIzaSyBliLgMQpiahmZl0OWdCZhT1mHOaJ0FBCE",
    authDomain: "project-tracker-th.firebaseapp.com",
    databaseURL: "https://project-tracker-th.firebaseio.com",
    projectId: "project-tracker-th",
    storageBucket: "project-tracker-th.appspot.com",
    messagingSenderId: "997645017628"
 };
 firebase.initializeApp(config);
firebase.firestore().enablePersistence();

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
