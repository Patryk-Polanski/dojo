import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyC5hnCU7EeqqdKsJlQlMKtUCkKUe4z5Fzw',
  authDomain: 'dojo-e9a8d.firebaseapp.com',
  projectId: 'dojo-e9a8d',
  storageBucket: 'dojo-e9a8d.appspot.com',
  messagingSenderId: '908671273564',
  appId: '1:908671273564:web:753d684d654cf067fa3499',
};

// init firebase
firebase.initializeApp(firebaseConfig);

// init services
const projectFirestore = firebase.firestore();
const projectAuth = firebase.auth();
const projectStorage = firebase.storage();

// timestamp
const timestamp = firebase.firestore.Timestamp;

export { projectFirestore, projectAuth, projectStorage, timestamp };
