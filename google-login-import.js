//firebase.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.2.0/firebase-app.js";
import { 
  getAuth,// authentication 설정
  signInWithPopup, //google 로그인을 팝업창에 띄우기 위해
  GoogleAuthProvider, //google login 기능
  signInWithEmailAndPassword,// email 로그인
  createUserWithEmailAndPassword, //email 회원가입
} from 'https://www.gstatic.com/firebasejs/9.2.0/firebase-auth.js';

// const firebaseConfig
//...

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// auth 설정 필수!!
const auth = getAuth();

//...

//Google 로그인
const provider = new GoogleAuthProvider();
export const loginGoogle = () => {
  return signInWithPopup(auth, provider);
};

//script.js
import { loginEmail, signupEmail,loginGoogle } from './firebase.js';
const buttons = document.getElementById('buttons');

//Email 로그인, 회원가입 구현
//...

//Google 로그인
google.addEventListener('click', (e) => {
  loginGoogle().then((result) => {
    console.log(result);
    const user = result.user;
    loginSuccess(user.email, user.uid);
  });
});

//로그인 성공시 UI 변경
const loginSuccess = (email, uid) => {
  const login_area = document.getElementById('login-area');
  login_area.innerHTML = `<h2>Login 성공!</h2><div>uid: ${uid}</div><div>email: ${email}</div>`;
};
