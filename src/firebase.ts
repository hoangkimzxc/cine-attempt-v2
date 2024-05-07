// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBSjBnn9VTYdXe6TMQLlU8EBA6Koy3W0js",
  authDomain: "cine-attempt-v2-6645c.firebaseapp.com",
  projectId: "cine-attempt-v2-6645c",
  storageBucket: "cine-attempt-v2-6645c.appspot.com",
  messagingSenderId: "710669695415",
  appId: "1:710669695415:web:20ea16fa31b967161a1032",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
