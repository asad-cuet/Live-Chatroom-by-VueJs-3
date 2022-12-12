import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'
import 'firebase/compat/auth'


const firebaseConfig = {
  apiKey: "AIzaSyAzfkC0NXI9I_3E44fXDSmIuQRirNrWzSc",
  authDomain: "live-chatroom-42bc6.firebaseapp.com",
  projectId: "live-chatroom-42bc6",
  storageBucket: "live-chatroom-42bc6.appspot.com",
  messagingSenderId: "1077564721748",
  appId: "1:1077564721748:web:420a5ce38c725a52997bc1"
};

 //init firebase
 firebase.initializeApp(firebaseConfig)   //firebaseConfig is const name from paste code

 //init firestore service
 const projectAuth=firebase.auth()

 const projectFirestore= firebase.firestore()

 const timestamp=firebase.firestore.FieldValue.serverTimestamp   //Optional, if you want to make timestamp column

 export { projectAuth,projectFirestore, timestamp }


