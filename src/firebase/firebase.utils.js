import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDeqYHRxtxqWyIcTRxLB8PNYyxqV0FF2rg",
    authDomain: "crwn-clothing-store-db-3c0d1.firebaseapp.com",
    databaseURL: "https://crwn-clothing-store-db-3c0d1.firebaseio.com",
    projectId: "crwn-clothing-store-db-3c0d1",
    storageBucket: "crwn-clothing-store-db-3c0d1.appspot.com",
    messagingSenderId: "463463019928",
    appId: "1:463463019928:web:747b4b6240157dea49e7ed",
    measurementId: "G-K88VBKV2S7"
};
export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();

    if (!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch (error) {
            console.log("error creating user", error.message);
        }
    }

    return userRef;
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;