// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";



// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

//cambiar
const firebaseConfig = {
  apiKey: "AIzaSyCFJMp2RjRw-AB3N83hgvb_-q4KnLU3sPE",
  authDomain: "food-delivery-app-34de5.firebaseapp.com",
  projectId: "food-delivery-app-34de5",
  storageBucket: "food-delivery-app-34de5.appspot.com",
  messagingSenderId: "55142300096",
  appId: "1:55142300096:web:ca723393fba02f1d373025"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app) 

