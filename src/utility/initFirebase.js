// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyAJ-NcROu_BuXcMbtsZX1gjJfUTED-4ACA',
  authDomain: 'withseismic-264812.firebaseapp.com',
  databaseURL:
    'https://withseismic-264812-default-rtdb.europe-west1.firebasedatabase.app',
  projectId: 'withseismic-264812',
  storageBucket: 'withseismic-264812.appspot.com',
  messagingSenderId: '512646951822',
  appId: '1:512646951822:web:78c84be9c811cd6d90eadf',
  measurementId: 'G-ZWR75P7CHR',
}

// Initialize Firebase
export const app = initializeApp(firebaseConfig)

export const firebase = getFirestore(app)
