
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDFzMK5H7Gd_yipswUle9jnZWFGLeYxhY0",
  authDomain: "proplus-aa523.firebaseapp.com",
  projectId: "proplus-aa523",
  storageBucket: "proplus-aa523.appspot.com",
  messagingSenderId: "701524565838",
  appId: "1:701524565838:web:f5bd2ee58cd11c4c26481f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// For the Sign In button
const signInSubmit = document.getElementById('signIn');
signInSubmit.addEventListener("click", function(event){
  event.preventDefault();

  // inputs
  const email = document.getElementById('signInEmail').value;
  const password = document.getElementById('signInPassword').value;

  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      alert("Logged in successfully");
      window.location.href = "index.app.html";
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(errorMessage);
    });
});

// For the Sign Up button
const signUpSubmit = document.getElementById('signUp');
signUpSubmit.addEventListener("click", function(event){
  event.preventDefault();

  // inputs
  const email = document.getElementById('signUpEmail').value;
  const password = document.getElementById('signUpPassword').value;

  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed up
      const user = userCredential.user;
      alert("Account created successfully");
      window.location.href = "index.app.html";
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(errorMessage);
    });
});
