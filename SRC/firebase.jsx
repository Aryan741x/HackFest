// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD4373GSOWxaXrRVyQ5fAE3JRADjBvndhI",
  authDomain: "chatapp-5a5fc.firebaseapp.com",
  projectId: "chatapp-5a5fc",
  storageBucket: "chatapp-5a5fc.appspot.com",
  messagingSenderId: "606107620021",
  appId: "1:606107620021:web:e02c93d07fa887728824fc",
  measurementId: "G-CZ93LMGEE1"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const auth=getAuth()