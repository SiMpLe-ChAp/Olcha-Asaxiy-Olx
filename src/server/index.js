import { initializeApp } from "firebase/app";
import { getFirestore } from '@firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyC68pnasIea0eAK2zWn4W9tQpqoh9D5A-Y",
  authDomain: "melon-uz.firebaseapp.com",
  projectId: "melon-uz",
  storageBucket: "melon-uz.appspot.com",
  messagingSenderId: "450166912112",
  appId: "1:450166912112:web:2329a5d995f64b0e6530b5",
  measurementId: "G-114JRP175W"
};
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
