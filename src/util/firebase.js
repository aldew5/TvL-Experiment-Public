import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAD7EePD7WlGe1xlEpy4dc_diQ-kri_1k4",
  authDomain: "tvl-experiment.firebaseapp.com",
  projectId: "tvl-experiment",
  storageBucket: "tvl-experiment.appspot.com",
  messagingSenderId: "1096776130813",
  appId: "1:1096776130813:web:ac7cebf286512dd3c65e94",
  measurementId: "G-T1CHQXJEDV"
};

firebase.initializeApp(firebaseConfig);

export default firebase;
