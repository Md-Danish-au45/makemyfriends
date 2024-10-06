// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAlpYNyoZAgbriTjKkJHUqYlpHB_XgFHUA",
  authDomain: "makemyfirends.firebaseapp.com",
  projectId: "makemyfirends",
  storageBucket: "makemyfirends.appspot.com",
  messagingSenderId: "759371074454",
  appId: "1:759371074454:web:8724ce55bd8e45b1446bb7",
  measurementId: "G-5GM2YFHNLT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);