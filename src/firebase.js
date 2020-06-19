import firebase from "firebase";

firebase.initializeApp({
  apiKey: "AIzaSyBPOpKlMwb1MD9LtvGKSepMogWwpRgYmwQ",
  authDomain: "react-app-38414.firebaseapp.com",
  databaseURL: "https://react-app-38414.firebaseio.com",
  projectId: "react-app-38414",
  storageBucket: "react-app-38414.appspot.com",
  messagingSenderId: "601560272554",
  appId: "1:601560272554:web:e01fa5f3e7679fabc78ad3",
  measurementId: "G-Z5316DG77Q",
});

const database = firebase.database();

export { database };
