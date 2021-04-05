import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyBrflM7hcGRLUgWMajpntlVSBq-n5zfBB0",
    authDomain: "app-builds-55eef.firebaseapp.com",
    projectId: "app-builds-55eef",
    storageBucket: "app-builds-55eef.appspot.com",
    messagingSenderId: "1024975080340",
    appId: "1:1024975080340:web:9025234d27229e23519d81",
    measurementId: "G-J9Y9NF0GD7"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()
const auth = firebase.auth()

export { auth }
export default db