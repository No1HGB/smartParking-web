// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase, ref } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTO_DOMAIN,
  databaseURL: process.env.REACT_APP_DB_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGE_ID,
  appId: process.env.REACT_APP_APP_ID,
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getDatabase();

export const parkingRef = ref(db);
export const lotRef = ref(db, "parkinglots/parking");

export const boolRef = ref(db, "parkinglots/parking/lot1/bool");
export const boolRef2 = ref(db, "parkinglots/parking/lot2/bool");
export const boolRef3 = ref(db, "parkinglots/parking/lot3/bool");
export const boolRef4 = ref(db, "parkinglots/parking/lot4/bool");
export const boolRef5 = ref(db, "parkinglots/parking/lot5/bool");
export const boolRef6 = ref(db, "parkinglots/parking/lot6/bool");

export const parkloc = ref(db, "parkinglots/parking/loc");
