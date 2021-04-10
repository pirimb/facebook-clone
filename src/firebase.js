import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyCrSA4Ojky283hMzH118-ClGUgU5I-Y074",
    authDomain: "facebook-clone-e2b1b.firebaseapp.com",
    projectId: "facebook-clone-e2b1b",
    storageBucket: "facebook-clone-e2b1b.appspot.com",
    messagingSenderId: "966366584276",
    appId: "1:966366584276:web:8c4abef60370aa5d550a41"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()
const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()

export {auth, provider}
export default db