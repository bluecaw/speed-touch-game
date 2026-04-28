

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getFirestore, doc, getDoc, setDoc, collection, query, orderBy, limit, getDocs } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";
// 1. auth（認証）機能のインポートを追加
import { getAuth, signInWithEmailAndPassword, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

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
const auth = getAuth(app); // 2. 認証の初期化

// --- 3. ログイン用の関数 ---
function login() {
  const email = prompt("ID（メールアドレス）を入力してください:");
  const password = prompt("パスワードを入力してください:");

  if (email && password) {
    signInWithEmailAndPassword(auth, email, password)
      .catch((error) => {
        alert("ログイン失敗。正しい情報を入力してください。");
        login(); 
      });
  } else {
    login();
  }
}

// --- 4. 認証状態の監視 ---
onAuthStateChanged(auth, (user) => {
  if (user) {
    console.log("ログイン中:", user.email);
    initApp(); // ログイン済みならアプリ起動
  } else {
    login(); // 未ログインならポップアップを出す
  }
});

// --- 5. 本来のアプリ処理（ここに既存のコードをすべて入れる） ---
function initApp() {
  
  /* ここに、元々 script.js に書いていた
     ・addEventListener
     ・タイピングの判定ロジック
     ・Firestoreからのデータ取得 (getDocsなど)
     などをすべてそのまま「貼り付け」してください。
  */
  console.log("アプリが正常に起動しました");

}