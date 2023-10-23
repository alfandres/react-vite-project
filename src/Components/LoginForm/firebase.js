import firebase from 'firebase/app';
import 'firebase/auth'; // Importa los módulos que necesites usar, por ejemplo, para autenticación

// Configura tus credenciales de Firebase
const firebaseConfig = {
  apiKey: "AIzaSyAEAgptlxFJjaw6ks1aWpo2jVtqgqHEhpY",
  authDomain: "shopi-reactcourseproject.firebaseapp.com",
  projectId: "shopi-reactcourseproject",
  storageBucket: "shopi-reactcourseproject.appspot.com",
  messagingSenderId: "1075943385873",
  appId: "1:1075943385873:web:47635f9a9452996edefab0"
};

// Inicializa Firebase con la configuración
firebase.initializeApp(firebaseConfig);

export default firebase;
