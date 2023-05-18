import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyD6seqtdCUDv9YQ0OXSE6fc6xMU0Dc50vk",
  authDomain: "ng-ecommerce-5a42c.firebaseapp.com",
  projectId: "ng-ecommerce-5a42c",
  storageBucket: "ng-ecommerce-5a42c.appspot.com",
  messagingSenderId: "624843488906",
  appId: "1:624843488906:web:d9c99bb24d1bff65483773"
};

initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
