import firebase from "firebase";

const firebaseConfig = {

  apiKey: "AIzaSyCZOEFtfdUa5zcPPpRp90NLeVUhFeRpNbY",

  authDomain: "disneyplus-clone-d9555.firebaseapp.com",

  projectId: "disneyplus-clone-d9555",

  storageBucket: "disneyplus-clone-d9555.appspot.com",

  messagingSenderId: "903108494060",

  appId: "1:903108494060:web:4e219c021c6ecbeccd9bc9"

};



const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;