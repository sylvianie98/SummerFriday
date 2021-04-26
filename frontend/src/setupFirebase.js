import firebase from 'firebase';
import 'firebase/auth';


const firebaseConfig = {
    apiKey: "AIzaSyC8EqW6BcFkBFmlN7ISh7jbjokR7ha-8UQ",
    authDomain: "summerfriday-d603a.firebaseapp.com",
    projectId: "summerfriday-d603a",
    storageBucket: "summerfriday-d603a.appspot.com",
    messagingSenderId: "628552955685",
    appId: "1:628552955685:web:76d3fa9bf74b1144e68ccc",
    measurementId: "G-ES563G1YPY"
  };

firebase.initializeApp(firebaseConfig);

export default firebase;