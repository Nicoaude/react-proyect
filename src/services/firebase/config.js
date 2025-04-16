import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyBZV93QbefrNG1gx0G0GH9jH3ycdXZux1I",
  authDomain: "proyecto-react-6442e.firebaseapp.com",
  projectId: "proyecto-react-6442e",
  storageBucket: "proyecto-react-6442e.firebasestorage.app",
  messagingSenderId: "262267048323",
  appId: "1:262267048323:web:e9de442a0198890baa26b6"
};

const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)
