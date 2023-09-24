// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCKNFxLXpvxjJG8iw8GmtQMp3MsA8AEaW4",
  authDomain: "football-46305.firebaseapp.com",
  projectId: "football-46305",
  storageBucket: "football-46305.appspot.com",
  messagingSenderId: "760267940303",
  appId: "1:760267940303:web:f1cd91715cad171318f2ba",
  measurementId: "G-HLSQLNNPW2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const auth = getAuth(app);
export { auth }

