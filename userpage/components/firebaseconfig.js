import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCdh6PiQTb__Ko9hiJhD9ZkoKwtqBulFWM",
  authDomain: "user-f22f4.firebaseapp.com",
  projectId: "user-f22f4",
  storageBucket: "user-f22f4.appspot.com",
  messagingSenderId: "646702076784",
  appId: "1:646702076784:android:37126b48b2d7dd2f26f5b5",
  databaseURL: "https://user-f22f4.firebaseio.com",
};

const app = initializeApp(firebaseConfig);    
const auth = getAuth(app);
const firestore = getFirestore(app);

export { auth, firestore };
