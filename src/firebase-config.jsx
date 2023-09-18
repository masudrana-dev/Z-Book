// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDjrC0pSjQV17P5am6B8s-iK-SwkXe6RLU",
    authDomain: "zaker-book.firebaseapp.com",
    projectId: "zaker-book",
    storageBucket: "zaker-book.appspot.com",
    messagingSenderId: "106487766780",
    appId: "1:106487766780:web:5786a0659fb119b4a1c179"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export default auth;