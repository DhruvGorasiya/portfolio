import { initializeApp, getApp, getApps } from "firebase/app"
import { getFirestore } from "firebase/firestore"


const firebaseConfig = {
    apiKey: "AIzaSyBw04r7xP-0p_EsZGPnaBXzrE5WGTusiuI",
    authDomain: "my-portfolio-e5ea5.firebaseapp.com",
    projectId: "my-portfolio-e5ea5",
    storageBucket: "my-portfolio-e5ea5.appspot.com",
    messagingSenderId: "967015891845",
    appId: "1:967015891845:web:10d4837c26b1c79bf9faec",
    measurementId: "G-DQ0XQY61JY"
};

const app = getApp.length > 0 ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);

export { app, db };