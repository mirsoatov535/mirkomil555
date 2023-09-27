import { initializeApp } from "firebase/app";
import{getAuth} from "firebase/auth"

const firebaseConfig = {
    apiKey: "AIzaSyBg4Ki_cScU1nQSZJpFvyqQ9B3D10491ys",
    authDomain: "insta-auth-2fe6b.firebaseapp.com",
    projectId: "insta-auth-2fe6b",
    storageBucket: "insta-auth-2fe6b.appspot.com",
    messagingSenderId: "810814513136",
    appId: "1:810814513136:web:42c7fa2a425236789ec735",
    measurementId: "G-FS9M7HY78Y"
};


const app = initializeApp(firebaseConfig);

const auth = getAuth();

export { auth , app };