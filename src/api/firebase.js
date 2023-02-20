// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";



// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

//cambiar
const firebaseConfig = {
  apiKey: "AIzaSyCCe4AOkeDn59yq9nz5V6gcsJKgYaW_djo",
  authDomain: "sprint-food-delivery.firebaseapp.com",
  projectId: "sprint-food-delivery",
  storageBucket: "sprint-food-delivery.appspot.com",
  messagingSenderId: "284184934604",
  appId: "1:284184934604:web:6132345639c39e8bc9aa69"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app) 

