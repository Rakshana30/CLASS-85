import firebase from 'firebase'
require('@firebase/firestore')

var firebaseConfig = {
    apiKey: "AIzaSyCDjdQE78KSWNIAp8wP2iCViDgb0VYKIfQ",
    authDomain: "booksanta-a6222.firebaseapp.com",
    projectId: "booksanta-a6222",
    storageBucket: "booksanta-a6222.appspot.com",
    messagingSenderId: "758080965661",
    appId: "1:758080965661:web:308ea2d5d4112bc36c0af4",
    measurementId: "G-NRJG6TBYMZ"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
export default firebase.firestore()

