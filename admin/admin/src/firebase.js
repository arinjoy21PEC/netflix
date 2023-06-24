import firebase from 'firebase/compat/app';
import 'firebase/compat/storage';

const firebaseConfig = {
    apiKey: "AIzaSyDzjUm24hg4lLMCq7WQZeW4HTRRwekwaZc",
    authDomain: "netflix-f40be.firebaseapp.com",
    projectId: "netflix-f40be",
    storageBucket: "netflix-f40be.appspot.com",
    messagingSenderId: "841501069833",
    appId: "1:841501069833:web:1e2db83c1fac9a2270ded8",
    measurementId: "G-9VE1HSWRH9"
  };

firebase.initializeApp(firebaseConfig);
const storage = firebase.storage();
export default storage;
