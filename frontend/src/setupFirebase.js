import firebase from 'firebase';
import 'firebase/auth';


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBcdT8ExH6hxyUwhHnplO_GAeLYFkcHIkg",
  authDomain: "summerfriday-227bf.firebaseapp.com",
  projectId: "summerfriday-227bf",
  storageBucket: "summerfriday-227bf.appspot.com",
  messagingSenderId: "859928828975",
  appId: "1:859928828975:web:23d1a0c3fcb5d95b3a7ada",
  measurementId: "G-F6DMHR3GV6"
};

firebase.initializeApp(firebaseConfig);

export default firebase;