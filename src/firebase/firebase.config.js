// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCQu935lRC-emYI0UIBx-fmPAOyg-Edbu0",
  authDomain: "assignment-9-28cb2.firebaseapp.com",
  projectId: "assignment-9-28cb2",
  storageBucket: "assignment-9-28cb2.firebasestorage.app",
  messagingSenderId: "376553980718",
  appId: "1:376553980718:web:ccd4f69ff68d698061f0bf"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;