// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAiYcWc7MSfaAdr4sXx8eOVwh5dFLeD4ig",
    authDomain: "gomeria-belgrano.firebaseapp.com",
    projectId: "gomeria-belgrano",
    storageBucket: "gomeria-belgrano.firebasestorage.app",
    messagingSenderId: "741583740788",
    appId: "1:741583740788:web:bb722dc103b5b0f9269621",
    measurementId: "G-W2RFYJBY5K"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);