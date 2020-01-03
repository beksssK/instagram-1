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
    uid = '';
    messagesRef = null;
    constructor() {
        firebase.initializeApp(config);
        this.auth = firebase.auth();
        this.firestore = firebase.firestore();
    }

    async login(email, password) {
        const user = await firebase.auth().signInWithEmailAndPassword(email,password).catch(err => {
            console.log('sexxxx' + err)
        })
        return user;
    }
    async register(name, id, email, password) {
        const user = await firebase.auth().createUserWithEmailAndPassword(email,password)
            .then(authRes => {
                const userObj = {
                    id,
                    name,
                    email: authRes.user.email,
                };
                firebase.firestore().collection('users').add(userObj);
            }).then(sex => {

            })
            .catch(err => {
            console.log(err)
        });
    }
    async stateUser() {
        return new Promise(resolve => {
            this.auth.onAuthStateChanged(resolve)
        })
    }

   async getMessage(userId) {
       return await firebase.firestore().collection('messe').doc(userId).get();
   }
    async logout() {
        await firebase.auth().signOut().catch(err => {
            console.log(err);
        })
    }
    async getUserName() {
        return firebase.auth().currentUser.displayName;
    }
    async createMessage(message) {
        await firebase.firestore().collection('messe').add({
            name: await firebase.auth().currentUser.displayName,
            text: message,
        })
    }
    getUsers(){
        return firebase.firestore().collection('users');
    }
}


export default new Firebase();
