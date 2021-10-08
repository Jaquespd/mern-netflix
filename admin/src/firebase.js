import firebase from "firebase";

// const firebaseConfig = {
//   apiKey: process.env.APP_KEY,
//   authDomain: "netflix-151df.firebaseapp.com",
//   projectId: "netflix-151df",
//   storageBucket: "netflix-151df.appspot.com",
//   messagingSenderId: "316700975498",
//   appId: "1:316700975498:web:15063159b205c1a349a873",
//   measurementId: "G-2ZGE63ES9F",
// };

const firebaseConfig = {
  apiKey: "AIzaSyDXBIIngsgDg20QjX8MHuOcO-Am4s-Sw1w",
  authDomain: "expensify-23b76.firebaseapp.com",
  databaseURL: "https://expensify-23b76.firebaseio.com",
  projectId: "expensify-23b76",
  storageBucket: "expensify-23b76.appspot.com",
  messagingSenderId: "260501978597",
  appId: "1:260501978597:web:1a142852e9c6766e",
};

firebase.initializeApp(firebaseConfig);
const storage = firebase.storage();
export default storage;
