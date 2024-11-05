// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// You might need to import auth as well from firebase/auth if you're using authentication
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD4CE39J49319k9nuvrfQ8jouB7ZyNMqps",
  authDomain: "fir-auth-39d6c.firebaseapp.com",
  projectId: "fir-auth-39d6c",
  storageBucket: "fir-auth-39d6c.firebasestorage.app",
  messagingSenderId: "100254710671",
  appId: "1:100254710671:web:5784a2de40bac13895a9fa"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Auth
const auth = getAuth(app);

// Export both app and auth
export { app, auth };