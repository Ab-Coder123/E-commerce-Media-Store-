// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBsFl7Z_gjey_M6bg1yoXic9VLSduSMc5c",
  authDomain: "authentication2-4b33b.firebaseapp.com",
  projectId: "authentication2-4b33b",
  storageBucket: "authentication2-4b33b.appspot.com",
  messagingSenderId: "27887257501",
  appId: "1:27887257501:web:bcfe2265d942c3b6f2d174"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export { app, auth };