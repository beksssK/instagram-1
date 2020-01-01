import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';
const config = {
    apiKey: "AIzaSyBv5EZL3-Nvk_TpkL9KMF6fd2ChMJIqUyo",
    authDomain: "instagram-96fe8.firebaseapp.com",
    databaseURL: "https://instagram-96fe8.firebaseio.com",
    projectId: "instagram-96fe8",
    storageBucket: "gs://instagram-96fe8.appspot.com",
    messagingSenderId: "608028011408",
    appId: "1:608028011408:web:bd46cad5c391c643bbe115",
    measurementId: "G-DLTYZ0QB1W"
};
// Initialize Firebase
class Firebase {
    constructor() {
        firebase.initializeApp(config);
        this.auth = firebase.auth();
        this.firestore = firebase.firestore();
    }

    async login(email, password) {
        const user = await firebase.auth().signInWithEmailAndPassword(email,password).catch(err => {
            console.log(err)
        })
        return user;
    }
    async signin(email, password) {
        const user = await firebase.auth().createUserWithEmailAndPassword(email,password).catch(err => {
            console.log(err)
        })
        return user;
    }
    async stateUser() {
        return new Promise(resolve => {
            this.auth.onAuthStateChanged(resolve)
        })
    }

    async logout() {
        await firebase.auth().signOut().then(err => {
            console.log(err)
        })
    }
}


export default new Firebase();
