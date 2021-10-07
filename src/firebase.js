import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyA2bOs779wY4U9cWqaMQi4qKaOHilUlswc",
  authDomain: "rentacar-4c1a7.firebaseapp.com",
  projectId: "rentacar-4c1a7",
  storageBucket: "rentacar-4c1a7.appspot.com",
  messagingSenderId: "15727046251",
  appId: "1:15727046251:web:671e299bffa7a536ce8b2e",
};

const firebaseDB = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

export { firebaseDB, auth };
