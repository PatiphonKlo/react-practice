import { initializeApp } from "firebase/app";
import { getFirestore, connectFirestoreEmulator } from "firebase/firestore";
import { getAuth, connectAuthEmulator } from "firebase/auth";
import { getStorage, connectStorageEmulator } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_APP_FIREBASE_API_KEY,
  authDomain: "developer-96b48.firebaseapp.com",
  projectId: "developer-96b48",
  storageBucket: "developer-96b48.appspot.com",
  messagingSenderId: "276298134445",
  appId: "1:276298134445:web:dc99f21d642d6433e0e724",
  measurementId: "G-2SEJGZ4ZX8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const projectFirestore = getFirestore(app);
const projectAuth = getAuth();
const projectStorage = getStorage();

if (window.location.hostname === "localhost") {
  connectFirestoreEmulator(projectFirestore, "localhost", 8080);
  connectStorageEmulator(projectStorage, "localhost", 9199);
  connectAuthEmulator(projectAuth, "http://127.0.0.1:9099");
}
// console.log(window.location.hostname);

export { projectFirestore, projectAuth, projectStorage };
