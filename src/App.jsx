import React from "react";

//import Scss
import "./assets/scss/themes.scss";

//imoprt Route
import Route from "./routes";

// Import Firebase Configuration file
import { initFirebaseBackend } from "./helpers/firebase_helper";

// Fake Backend
import fakeBackend from "./helpers/AuthType/fakeBackend";

// Kiểm tra xem có phải môi trường Phát triển (Local) không
if (import.meta.env.DEV) {
  console.log("Bạn đang ở chế độ Development 🛠️");
  const firebaseConfig = {
    apiKey: import.meta.env.VITE_APP_APIKEY,
    authDomain: import.meta.env.VITE_APP_AUTHDOMAIN,
    databaseURL: import.meta.env.VITE_APP_DATABASEURL,
    projectId: import.meta.env.VITE_APP_PROJECTID,
    storageBucket: import.meta.env.VITE_APP_STORAGEBUCKET,
    messagingSenderId: import.meta.env.VITE_APP_MESSAGINGSENDERID,
    appId: import.meta.env.VITE_APP_APPID,
    measurementId: import.meta.env.VITE_APP_MEASUREMENTID
  };

  // init firebase backend
  initFirebaseBackend(firebaseConfig);
}

// Kiểm tra xem có phải môi trường Producton (Đã build) không
if (import.meta.env.PROD) {
  console.log("Bạn đang ở chế độ Production 🚀");
  // Activating fake backend
  fakeBackend();
}

function App() {
  return (
    <React.Fragment>
      <Route />
    </React.Fragment>
  );
}

export default App;
