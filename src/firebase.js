// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore"; 
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBC3PKA6WRBZSoeqkrmYPiSHaTJw9JD0EQ",
  authDomain: "development-29f23.firebaseapp.com",
  projectId: "development-29f23",
  storageBucket: "development-29f23.appspot.com",
  messagingSenderId: "279359559574",
  appId: "1:279359559574:web:3c6b77b6854232a7de2fb7",
  measurementId: "G-TWWDS6MLGW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app); // สร้างตัวแปร db มารับค่าที่ได้จากการเรียกใช้ getFirestore โดยส่งค่า app เข้าไป

export default db // Exporting the firestore instance as default