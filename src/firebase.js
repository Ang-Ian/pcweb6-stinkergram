// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey:process.env.REACT_APP_API_KEY,
  authDomain:process.env.REACT_APP_AUTH_DOMAIN,
  projectId:process.env.REACT_APP_PROJECT_ID,
  storageBucket:process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId:process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId:process.env.REACT_APP_APP_ID
};

// REACT_APP_API_KEY=AIzaSyBOmxBaxXktVjTGyvxuvPuga22OEQjDPpQ
// REACT_APP_AUTH_DOMAIN=pcweb6-d51c6.firebaseapp.com
// REACT_APP_PROJECT_ID=pcweb6-d51c6
// REACT_APP_STORAGE_BUCKET=pcweb6-d51c6.appspot.com
// REACT_APP_MESSAGING_SENDER_ID=888677980789
// REACT_APP_APP_ID=1:888677980789:web:1ac58a4fa5c5f8e93fb63c

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);