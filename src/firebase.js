import firebase from "firebase/app"
import "firebase/auth"
import "firebase/firestore"
import "firebase/storage"

const app = firebase.initializeApp({
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain:  process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    projectId:  process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket:  process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId:  process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    appId:  process.env.REACT_APP_FIREBASE_APP_ID,
    measurementId:  process.env.REACT_APP_FIREBASE_MEASUREMENT_ID
})

export const database = {
    folders: app.firestore().collection('folders'),
    files: app.firestore().collection('files'),
    timestamp : firebase.firestore.FieldValue.serverTimestamp(),
    formatDoc: doc => {
        return { id: doc.id, ...doc.data()}
    }
}
export const auth = app.auth()
export default app
export const storage = app.storage()