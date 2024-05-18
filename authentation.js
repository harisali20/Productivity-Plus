
alert('something');


// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/10.12.0/database.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-analytics.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.12.0/database-auth.js";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDqf8tTg_jd2JLLYspMfhNbjp3FvJw4Q2M",
  authDomain: "pplus-66907.firebaseapp.com",
  databaseURL: "https://pplus-66907-default-rtdb.firebaseio.com",
  projectId: "pplus-66907",
  storageBucket: "pplus-66907.appspot.com",
  messagingSenderId: "350615844207",
  appId: "1:350615844207:web:50b2973a4650b5a65f649a",
  measurementId: "G-EYRXZT1MQC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const analytics = getAnalytics(app);
const auth = getAuth();






//for the sign up button
signUp-BigInt.addEventListener('click', (e)=>{

  var email = document.getElementById('signUpEmail').value;
  var password = document.getElementById('signUpPassword').value;
  var username = document.getElementById('signUpName').value;



  createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    alert('userCreated');

    // ...Here you will be navigated to the next page.
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;

    alert(errorMessage);
    // ..
  });

});
