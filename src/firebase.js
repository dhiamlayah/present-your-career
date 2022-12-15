// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
apiKey: "AIzaSyBDjJ3E6Kg5QM6Ye9DzZ_lbV-Q0ibp6euE",
authDomain: "my-project-db-4d41e.firebaseapp.com",
projectId: "my-project-db-4d41e",
storageBucket: "my-project-db-4d41e.appspot.com",
messagingSenderId: "973544206086", 
appId: "1:973544206086:web:93d691e44a6004cce5b887"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app



