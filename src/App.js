import React, { useState } from "react";
import firebaseApp from "./firebase/credenciales";
import Login from "./views/Login";
import Sidebar from "./views/Sidebar";
import ChatScreen from "./views/ChatScreen";

/* import { getAuth, onAuthStateChanged } from "firebase/auth";
const auth = getAuth(firebaseApp); */

function App() {
  const [ userGlober, setUserGlobal ] = useState(null)
  return (
    <div>
      {userGlober ? (
        <>
          <Sidebar/>
          <ChatScreen/>
        </>
      ) : (
        <Login/>
      )}
    </div>
  );
}

export default App;
