// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAjeuuCqVjsN09eYsdm21DXU2j04PDspyg",
  authDomain: "clone-c5631.firebaseapp.com",
  projectId: "clone-c5631",
  storageBucket: "clone-c5631.appspot.com",
  messagingSenderId: "71821918061",
  appId: "1:71821918061:web:bcc05397b0a3564545e464",
  measurementId: "G-BELLWFC1WH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);