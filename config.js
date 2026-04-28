// script.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";
// 1. Authenticationをインポートに追加
import { getAuth } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

// --- 既存の設定 ---
const firebaseConfig = {
    apiKey: "AIzaSyDmErQEIQKssVy12KodGDjwfIDbWcwBOmo",
    authDomain: "speedtouch25-ca738.firebaseapp.com",
    projectId: "speedtouch25-ca738",
    storageBucket: "speedtouch25-ca738.appspot.com",
    messagingSenderId: "865990228190",
    appId: "1:865990228190:web:96e1a76f2648507851a719"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app); // 2. authを初期化

// index.html側でこれらを使えるようにエクスポートしておく
export { db, auth };