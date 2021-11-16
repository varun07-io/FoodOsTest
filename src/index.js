import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './app/App';
import "./i18n";
import * as serviceWorker from './serviceWorker';

import { initializeApp } from "firebase/app";
import firebase from "firebase/app";
const firebaseConfig = {
  apiKey: "AIzaSyAirfSkO5z4OQBgcuAqAIbdj6PxxhakzCU",
  authDomain: "foodos-adminweb-v2.firebaseapp.com",
  projectId: "foodos-adminweb-v2",
  storageBucket: "foodos-adminweb-v2.appspot.com",
  messagingSenderId: "984962208293",
  appId: "1:984962208293:web:7ff02267349e9c4bfae5cc",
  measurementId: "G-L068V2XVX4"
};
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}else {
  firebase.app(); // if already initialized, use that one
}

ReactDOM.render(
  <BrowserRouter basename="/restaurant">
    <App />
  </BrowserRouter>
, document.getElementById('root'));

serviceWorker.unregister();