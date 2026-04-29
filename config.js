import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyB37I8uc3HBalZ_swUEKwKice4ugQaPLDU", // 本物のAPIキーに差し替えてください
    authDomain: "speedtouch25-ca738.firebaseapp.com",
    projectId: "speedtouch25-ca738",
    storageBucket: "speedtouch25-ca738.appspot.com",
    messagingSenderId: "865990228190",
    appId: "1:865990228190:web:96e1a76f2648507851a719"
};

const app = initializeApp(firebaseConfig);

// 宣言とエクスポートを同時に行います（2回書かない）
export const db = getFirestore(app);
export const auth = getAuth(app);