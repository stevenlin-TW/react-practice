import React from 'react';
import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css'
import { BrowserRouter } from 'react-router-dom'
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCuiD6LBSzgPGiDb0PpyXHs5GicAiRbZ8A",
  authDomain: "react-spa-practice-2aad8.firebaseapp.com",
  databaseURL: "https://react-spa-practice-2aad8-default-rtdb.firebaseio.com",
  projectId: "react-spa-practice-2aad8",
  storageBucket: "react-spa-practice-2aad8.appspot.com",
  messagingSenderId: "450015373579",
  appId: "1:450015373579:web:8fa1358aab4b1ac20a5a0e",
  measurementId: "G-8S5D7JMT5T"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<React.StrictMode>
    <BrowserRouter>
        <App />
    </BrowserRouter>
</React.StrictMode>);





