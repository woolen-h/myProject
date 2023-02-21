  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyConfJfz3GCY4uttXY2oqDlh1k6f1VkXgo",
    authDomain: "login-981b0.firebaseapp.com",
    projectId: "login-981b0",
    storageBucket: "login-981b0.appspot.com",
    messagingSenderId: "504541843829",
    appId: "1:504541843829:web:a12d1eaa70f36d2895033c",
    measurementId: "G-Q67J3LBF90"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);