import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyB-zmSVUWK6-tH64D1IN--KGDW_Tz-0Sf4",
    authDomain: "netflix-clone-28cf5.firebaseapp.com",
    projectId: "netflix-clone-28cf5",
    storageBucket: "netflix-clone-28cf5.appspot.com",
    messagingSenderId: "437761427963",
    appId: "1:437761427963:web:bf7caf85f8465b7430e35e",
    measurementId: "G-KR86L9NPMV"
  };
  const firebaseApp = firebase.initializeApp(firebaseConfig)
  const db =firebase.firestore()
  const auth=firebase.auth()
  export {db,auth}