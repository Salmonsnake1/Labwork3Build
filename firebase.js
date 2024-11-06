
import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyD4CE39J49319k9nuvrfQ8jouB7ZyNMqps",
  authDomain: "fir-auth-39d6c.firebaseapp.com",
  projectId: "fir-auth-39d6c",
  storageBucket: "fir-auth-39d6c.firebasestorage.app",
  messagingSenderId: "100254710671",
  appId: "1:100254710671:web:5784a2de40bac13895a9fa"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export { app, auth };