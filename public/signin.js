// import { initializeApp }  from "firebase/app";
// import {getAuth,signInWithPopup,GoogleAuthProvider}  from "firebase/auth";
// const { initializeApp }=require( "./firebase/app");
//  const {getAuth,signInWithPopup,GoogleAuthProvider}=require( "./firebase/auth");
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.4/firebase-app.js";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
} from "https://www.gstatic.com/firebasejs/9.8.4/firebase-auth.js";


// Initialize Firebase
const app = initializeApp(window.firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

// Sign In with Google
document.getElementById("googleSignIn").addEventListener("click", () => {
  signInWithPopup(auth, googleProvider)
    .then((result) => {
      const user = result.user;
      console.log("Google Sign-In successful:", user);
      // You can also redirect the user or perform other actions
    })
    .catch((error) => {
      console.error("Error during Google sign-in:", error.message);
    });
});
