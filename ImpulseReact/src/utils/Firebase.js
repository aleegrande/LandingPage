import firebase from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyAKrU4_iuO7uiXGRRielIAUIg2xWeer_eM",
    authDomain: "impulse-4a47a.firebaseapp.com",
    databaseURL: "https://impulse-4a47a.firebaseio.com",
    projectId: "impulse-4a47a",
    storageBucket: "impulse-4a47a.appspot.com",
    messagingSenderId: "378821512180",
    appId: "1:378821512180:web:799bdfd80d07967a3547a1"
  };

  export default firebase.initializeApp(firebaseConfig);