

//Intializing the firebase
import { initializeApp } from "firebase/app";
//Intializing firebse to craete user email authorization
import { getAuth} from "firebase/auth";
//initalizing the to login into the firebase
import { getFirestore } from "firebase/firestore";
//getting the firestore modules
import { getStorage } from "firebase/storage";




const firebaseConfig = {
    apiKey: "AIzaSyCoe4NJdsMiiNCu7ozC8se0Gqnp8yRxwds",
    authDomain: "snapstore-2a32e.firebaseapp.com",
    projectId: "snapstore-2a32e",
    storageBucket: "snapstore-2a32e.appspot.com",
    messagingSenderId: "179768701524",
    appId: "1:179768701524:web:b7f18766466f24ce7ef3c1",
    measurementId: "G-3YZC27ED17"
  };
  
  const app = initializeApp(firebaseConfig);

  //initialize the db
  export const db = getFirestore(app);

  //so this app will have authentication
  export const auth = getAuth(app)
  export  const storage = getStorage(app);

  