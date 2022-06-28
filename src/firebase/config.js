import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore/lite'

const firebaseConfig = {
  apiKey: "AIzaSyC9fqkw4fOWf60rZn0HCt4dnOGf6AGMMy8",
  authDomain: "react-curso-a0bcd.firebaseapp.com",
  projectId: "react-curso-a0bcd",
  storageBucket: "react-curso-a0bcd.appspot.com",
  messagingSenderId: "846709711083",
  appId: "1:846709711083:web:a8642157a5e558e2c45eae"
};

export const firebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(firebaseApp);
export const FirebaseDB = getFirestore(firebaseApp);

