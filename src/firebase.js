

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, signInWithPopup} from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { GoogleAuthProvider } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyBKQV9JpXjCH7sEU-GSR6U_O8UznDpwAk8",
  authDomain: "clone-3b2aa.firebaseapp.com",
  projectId: "clone-3b2aa",
  storageBucket: "clone-3b2aa.firebasestorage.app",
  messagingSenderId: "241801518719",
  appId: "1:241801518719:web:1a942fe0a147beba40294a",
  measurementId: "G-6R4FNF3MB4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

 export const auth=getAuth(app);
export const db=getFirestore(app);
 export const  provider=new GoogleAuthProvider();


