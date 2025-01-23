import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import { getAuth } from "firebase/auth"


const firebaseConfig = {
    apiKey: "AIzaSyA9HADFqSSxr_04NNP6lDJ8B6oiAiAm85w",
    authDomain: "comision-71810.firebaseapp.com",
    projectId: "comision-71810",
    storageBucket: "comision-71810.firebasestorage.app",
    messagingSenderId: "659497143047",
    appId: "1:659497143047:web:c3cc96c75e74831c1b53a2"
};

//Con esta linea se esta "logueando" mi applicacion
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);