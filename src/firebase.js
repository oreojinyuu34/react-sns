import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB2xuvG6Wls8UBnyhEeIlb6tGNPEuHPY20",
  authDomain: "twitter-memo-91799.firebaseapp.com",
  projectId: "twitter-memo-91799",
  storageBucket: "twitter-memo-91799.appspot.com",
  messagingSenderId: "825969275729",
  appId: "1:825969275729:web:0e6c043df87f3d1d50d970",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
