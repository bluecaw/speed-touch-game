import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getFirestore, doc, getDoc, setDoc } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";
// auth（認証）機能を追加
import { getAuth, signInWithEmailAndPassword, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

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
const auth = getAuth(app); // 認証オブジェクトの初期化

// --- ログイン処理 ---
function login() {
    const email = prompt("ID（登録したメールアドレス）を入力してください:");
    const password = prompt("パスワードを入力してください:");

    if (email && password) {
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                alert("ログインに成功しました。アプリを開始します。");
            })
            .catch((error) => {
                alert("ログイン失敗: " + error.message);
                login(); // 失敗したら再度入力を促す
            });
    } else {
        alert("ログインが必要です。");
        login();
    }
}

// ログイン状態を監視
onAuthStateChanged(auth, (user) => {
    if (!user) {
        // ログインしていない場合はポップアップを出す
        login();
    } else {
        // ログインしている場合のみ、タイピングアプリの初期化処理（既存のコード）を実行
        console.log("Logged in as:", user.email);
        initApp();
    }
});

function initApp() {
    // ここに、元々書いていたタイピングゲームの開始処理（問題読み込みなど）を移動させます
}