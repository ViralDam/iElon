import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDPEnhS1OZXZHgork3cG3_SnWeCI3bp60k",
  authDomain: "ielon-b5a00.firebaseapp.com",
  projectId: "ielon-b5a00",
  storageBucket: "ielon-b5a00.appspot.com",
  messagingSenderId: "457469382536",
  appId: "1:457469382536:web:82d4625f73668866fef43d",
  measurementId: "G-CLLYWQDFS7"
};

export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const firebaseAuth = getAuth(app);