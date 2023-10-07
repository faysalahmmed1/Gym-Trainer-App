// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAY10nM04duhwqbHNuy7_KUi_eSx016YmE",
    authDomain: "gym-trainer-app-232f2.firebaseapp.com",
    projectId: "gym-trainer-app-232f2",
    storageBucket: "gym-trainer-app-232f2.appspot.com",
    messagingSenderId: "854014028643",
    appId: "1:854014028643:web:901e5eda917d82fd3ec156"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;