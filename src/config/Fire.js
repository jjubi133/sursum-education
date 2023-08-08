import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyBLObMM8XPagMUfwEaPBDyy9cg5fGGTKAo",
    authDomain: "sursumed.firebaseapp.com",
    projectId: "sursumed",
    storageBucket: "sursumed.appspot.com",
    messagingSenderId: "149470787831",
    appId: "1:149470787831:web:4a3110d4e1574c81b37bf2",
    measurementId: "G-6V8EDGTC1W"
  };

  const fire = firebase.initializeApp(config);
  export default fire;