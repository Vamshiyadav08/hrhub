

//Intializing the firebase
import { initializeApp } from "firebase/app";
//Intializing firebse to craete user email authorization
import { getAuth} from "firebase/auth";
//initalizing the to login into the firebase
import { getFirestore } from "firebase/firestore";
//getting the firestore modules
import { getStorage } from "firebase/storage";



  const firebaseConfig = {
    apiKey:process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    projectId:process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_FIREBASE_APP_ID,
    measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID
  };
  
  const app = initializeApp(firebaseConfig);

  //initialize the db
  export const db = getFirestore(app);

  //so this app will have authentication
  export const auth = getAuth(app)
  export  const storage = getStorage(app);

  