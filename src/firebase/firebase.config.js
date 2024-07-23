// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDXXDAn0gE2U4K-kR5NLCcPjW84nM7UKYo",
  authDomain: "book-store-6a5c9.firebaseapp.com",
  projectId: "book-store-6a5c9",
  storageBucket: "book-store-6a5c9.appspot.com",
  messagingSenderId: "953347998796",
  appId: "1:953347998796:web:04b9bd59d8957a2e6960e9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;