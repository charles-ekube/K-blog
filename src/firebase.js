import * as firebase from 'firebase/app';
import 'firebase/auth';



  // const app = firebase.initializeApp({
  //   apiKey: "AIzaSyAjxWw6dNWc3pHTREevnwR-_rxHRKIoUN8",
  //   authDomain: "kossy-blog.firebaseapp.com",
  //   projectId: "kossy-blog",
  //   storageBucket: "kossy-blog.appspot.com",
  //   messagingSenderId: "1048648700901",
  //   appId: "1:1048648700901:web:cd4fd118f9dccb45a9950c",
  //   measurementId: "G-6F774W0QQL",
  // });

  // export default app;

  // const firebaseConfig = {
  //   apiKey: "AIzaSyAjxWw6dNWc3pHTREevnwR-_rxHRKIoUN8",
  //        authDomain: "kossy-blog.firebaseapp.com",
  //   projectId: "kossy-blog",
  //  storageBucket: "kossy-blog.appspot.com",
  //   messagingSenderId: "1048648700901",
  //   appId: "1:1048648700901:web:cd4fd118f9dccb45a9950c",
  //  measurementId: "G-6F774W0QQL"
  //     };

  import firebase from 'firebase';
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
  measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID,
  // measurementId: process.env.,
};
const myApp = firebase.initializeApp(firebaseConfig);
export const auth = myApp.auth();