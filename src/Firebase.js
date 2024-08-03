// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyArSsY0jAjGpJoDgoGZY8_kfIHkMWBRmkI",
  authDomain: "realtor-clone-a0faa.firebaseapp.com",
  projectId: "realtor-clone-a0faa",
  storageBucket: "realtor-clone-a0faa.appspot.com",
  messagingSenderId: "771386261642",
  appId: "1:771386261642:web:9c99ddead194b84bd82d73"
};

// Initialize Firebase
initializeApp(firebaseConfig);

export const db = getFirestore(); 