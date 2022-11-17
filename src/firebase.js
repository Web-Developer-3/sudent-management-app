import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/database";

const firebaseConfig = {
  apiKey: "AIzaSyDSYm_A_xfpv7xv7Qaom3jdQ1Z6FQeDDxY",
  authDomain: "student-management-app-95fb4.firebaseapp.com",
  databaseURL:
    "https://student-management-app-95fb4-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "student-management-app-95fb4",
  storageBucket: "student-management-app-95fb4.appspot.com",
  messagingSenderId: "498699761522",
  appId: "1:498699761522:web:b94a1d6f25e3cea7394feb",
  measurementId: "G-V4G0BYV5WR",
};

firebase.initializeApp(firebaseConfig);

export default firebase;
