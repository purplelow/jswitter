import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDxP6QIRHnC1M1gj0a0LQhvBd6_HFyEo2I",
  authDomain: "jswitter-c1316.firebaseapp.com",
  projectId: "jswitter-c1316",
  storageBucket: "jswitter-c1316.appspot.com",
  messagingSenderId: "443224277866",
  appId: "1:443224277866:web:c88d3fd418029d654d1b13",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const storage = getStorage(app);

export const db = getFirestore(app);
