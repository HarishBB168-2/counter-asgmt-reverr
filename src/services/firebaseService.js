// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getFirestore, collection, getDocs } from "firebase/firestore/lite";
import {
  collection,
  addDoc,
  updateDoc,
  deleteDoc,
  getDocs,
  getFirestore,
  doc,
} from "firebase/firestore";

// import {db} from '../firebase';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCBWUKLyPQ0RaD5vBCqdR4fkk5VGr7XwKs",
  authDomain: "counter-reverr.firebaseapp.com",
  projectId: "counter-reverr",
  storageBucket: "counter-reverr.appspot.com",
  messagingSenderId: "332026018349",
  appId: "1:332026018349:web:7241565711ec1803eb16a4",
};

let app = null;
let db = null;

// Initialize Firebase
export const init = () => {
  app = initializeApp(firebaseConfig);
  db = getFirestore(app);
};

export const getDb = () => {
  return db;
};

export const getDataFromCollection = async (collectionName) => {
  if (!db) return null;
  const data = await getDocs(collection(db, collectionName));
  const newData = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
  return newData;
};

export const addDataToCollection = async (collectionName, data) => {
  if (!db) return null;
  await addDoc(collection(db, collectionName), data);
};

export const updateDataOfCollection = async (collectionName, data) => {
  if (!db) return null;
  const mCollection = collection(db, collectionName);
  const mDocRef = doc(mCollection, data.id);
  await updateDoc(mDocRef, data);
};

export const deleteDataFromCollection = async (collectionName, id) => {
  if (!db) return null;
  const docRef = doc(db, collectionName, id);
  await deleteDoc(docRef);
};
