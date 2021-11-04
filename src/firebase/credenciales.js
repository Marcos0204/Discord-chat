// Importamos la función para inicializar la aplicación de Firebase
import { initializeApp } from "firebase/app";

// Añade aquí tus credenciales
const firebaseConfig = {
  apiKey: "AIzaSyCnFuFDC7vPmVFHIJddSnwptKU60FfR32c",
  authDomain: "discord-chat-e157f.firebaseapp.com",
  projectId: "discord-chat-e157f",
  storageBucket: "discord-chat-e157f.appspot.com",
  messagingSenderId: "908445997251",
  appId: "1:908445997251:web:493659e4727ee2a8d86a76"
};

// Inicializamos la aplicación y la guardamos en firebaseApp
const firebaseApp = initializeApp(firebaseConfig);
// Exportamos firebaseApp para poder utilizarla en cualquier lugar de la aplicación
export default firebaseApp;
