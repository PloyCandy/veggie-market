// Import the functions you need from the SDKs you need
import * as firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBrwq48AOXg29TvLyzYjOWbyxX95w79nVU",
  authDomain: "veggiemarket-1786d.firebaseapp.com",
  projectId: "veggiemarket-1786d",
  storageBucket: "veggiemarket-1786d.appspot.com",
  messagingSenderId: "815104491351",
  appId: "1:815104491351:web:60832033660ee3ef578812"
};


// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app()
}

const auth = firebase.auth()

export { auth };