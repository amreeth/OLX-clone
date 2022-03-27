import firebase from 'firebase'
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import 'firebase/auth'
import 'firebase/firebase'
import 'firebase/storage'
const firebaseConfig = {
    apiKey: "AIzaSyDpDAg1ZODmunHPvqPJqTCCp3mbRC3zH1s",
    authDomain: "fir-54bbc.firebaseapp.com",
    projectId: "fir-54bbc",
    storageBucket: "fir-54bbc.appspot.com",
    messagingSenderId: "765999141827",
    appId: "1:765999141827:web:b6bd11a4f01f81b43d6376",
    measurementId: "G-RS3TBMPGDE"
  };
  
export default firebase.initializeApp(firebaseConfig)