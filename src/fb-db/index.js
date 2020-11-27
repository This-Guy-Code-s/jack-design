import firebase from 'firebase/app'
import 'firebase/storage'



const firebaseConfig = {
  apiKey: "AIzaSyAX_Ke_b_ro39VsqubobqQMwT1NBiEA_GA",
  authDomain: "jack-designs-4e9da.firebaseapp.com",
  databaseURL: "https://jack-designs-4e9da.firebaseio.com",
  projectId: "jack-designs-4e9da",
  storageBucket: "jack-designs-4e9da.appspot.com",
  messagingSenderId: "76348482549",
  appId: "1:76348482549:web:e0b5c0e76a4cc745f1b6bc",
  measurementId: "G-TYK1YTDVVB"
};



firebase.initializeApp(firebaseConfig)


const storage = firebase.storage()


export {storage, firebase as default}