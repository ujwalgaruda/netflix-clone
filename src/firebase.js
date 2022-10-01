import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAeb3nR-QV6qLimW77ZnYlcbjT-ipRwA98",
    authDomain: "netflix-clone-fafa2.firebaseapp.com",
    projectId: "netflix-clone-fafa2",
    storageBucket: "netflix-clone-fafa2.appspot.com",
    messagingSenderId: "906585315736",
    appId: "1:906585315736:web:e759b6a33aefbdf33e33ed",
    measurementId: "G-2Z8YHGFJC5"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()
const auth = firebase.auth()

export {auth}
export default db