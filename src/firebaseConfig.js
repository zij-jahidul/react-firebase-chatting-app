// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBM-1NHumL8QvNMocdX93-7QSjCpgahNk0",
    authDomain: "react-chatting-app-auth.firebaseapp.com",
    projectId: "react-chatting-app-auth",
    storageBucket: "react-chatting-app-auth.appspot.com",
    messagingSenderId: "83911769984",
    appId: "1:83911769984:web:bc5c3f9a57caf96e27cb65"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default firebaseConfig;
