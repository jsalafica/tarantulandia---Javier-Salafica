import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDrPwXnh3NSz1VhdY0tSVQYxGO-UxmJKjU",
  authDomain: "coderhouse-ecommerce-66057.firebaseapp.com",
  projectId: "coderhouse-ecommerce-66057",
  storageBucket: "coderhouse-ecommerce-66057.appspot.com",
  messagingSenderId: "995414929528",
  appId: "1:995414929528:web:47536525364294c6ab7d8d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
    <App />
  // </React.StrictMode>
);
