import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyAAgNlnN7DBglmbz21x53cFGWjvhAgqGrE",
    authDomain: "slack-clone-bbd38.firebaseapp.com",
    projectId: "slack-clone-bbd38",
    storageBucket: "slack-clone-bbd38.appspot.com",
    messagingSenderId: "521516264445",
    appId: "1:521516264445:web:398bdf4388fe3109a18794",
    measurementId: "G-8FJ2SRFJBR"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
export default db;