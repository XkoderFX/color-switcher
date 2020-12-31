import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyAHNeptW8zICU4jKn_w6YN3hjh2y12Xfxs",
    authDomain: "colorswitcher-2b719.firebaseapp.com",
    databaseURL:
        "https://colorswitcher-2b719-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "colorswitcher-2b719",
    storageBucket: "colorswitcher-2b719.appspot.com",
    messagingSenderId: "229033653462",
    appId: "1:229033653462:web:9b1d2b122a03e522b08577",
};

const FireBase = firebase.initializeApp(firebaseConfig);

export default FireBase
