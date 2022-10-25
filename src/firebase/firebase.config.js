// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCMJqZ85JyhzbN9sf3MBDwdDLAMw6v7gI8",
  authDomain: "tn-learning.firebaseapp.com",
  projectId: "tn-learning",
  storageBucket: "tn-learning.appspot.com",
  messagingSenderId: "706953413888",
  appId: "1:706953413888:web:3243a78c11cc8a617ddfe5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;