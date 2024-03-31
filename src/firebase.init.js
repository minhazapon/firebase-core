
// firebase file


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDycg1B0VMYFz6y2eQl7PFOhEfKVs0GxBM",
  authDomain: "fir-with-react-9ad03.firebaseapp.com",
  projectId: "fir-with-react-9ad03",
  storageBucket: "fir-with-react-9ad03.appspot.com",
  messagingSenderId: "335150329908",
  appId: "1:335150329908:web:9a633d9aedbf0788365a61"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;