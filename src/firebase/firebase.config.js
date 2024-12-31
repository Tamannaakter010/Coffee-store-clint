// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCPnpAClbwOCaBL_xsT6ACas_Nh8OSyvVs",
  authDomain: "coffee-store-97e36.firebaseapp.com",
  projectId: "coffee-store-97e36",
  storageBucket: "coffee-store-97e36.firebasestorage.app",
  messagingSenderId: "1070166825048",
  appId: "1:1070166825048:web:89d6a0356d72e11f8e922d",
  measurementId: "G-CNDSKNJLKW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;