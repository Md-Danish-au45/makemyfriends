// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// import 'firebase/compat/auth';
// import 'firebase/compat/firestore';

// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyAlpYNyoZAgbriTjKkJHUqYlpHB_XgFHUA",
//   authDomain: "makemyfirends.firebaseapp.com",
//   projectId: "makemyfirends",
//   storageBucket: "makemyfirends.appspot.com",
//   messagingSenderId: "759371074454",
//   appId: "1:759371074454:web:8724ce55bd8e45b1446bb7",
//   measurementId: "G-5GM2YFHNLT"
// };
// if (!firebase.apps.length) {
//   firebase.initializeApp(firebaseConfig);
// }

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
// export const auth = firebase.auth();
// Import the functions you need from the SDKs you need
// firebaseConfig.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getAnalytics } from 'firebase/analytics';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyAlpYNyoZAgbriTjKkJHUqYlpHB_XgFHUA',
  authDomain: 'makemyfirends.firebaseapp.com',
  projectId: 'makemyfirends',
  storageBucket: 'makemyfirends.appspot.com',
  messagingSenderId: '759371074454',
  appId: '1:759371074454:web:8724ce55bd8e45b1446bb7',
  measurementId: 'G-5GM2YFHNLT',
};

// Initialize Firebase only once
const app = initializeApp(firebaseConfig);

// Optional: Firebase Analytics (for web only)
// Analytics is not needed for React Native, you can omit it
// const analytics = typeof window !== 'undefined' ? getAnalytics(app) : null;

// Export Firebase services
export const auth = getAuth(app);
export const db = getFirestore(app);

// Export the app and firebaseConfig
export default app;
export { firebaseConfig };