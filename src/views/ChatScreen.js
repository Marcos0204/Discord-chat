import React, { useState, useEffect, useRef } from "react";

import { AddCircle, CreditCard, Gif, EmojiEmotions } from "@material-ui/icons";
import HeaderChat from '../components/HeaderChat'
//import Mensaje from "../components/Mensaje";
import firebaseApp from "../firebase/credenciales";
import {
  getFirestore,
  doc,
  setDoc,
  collection,
  getDocs,
} from "firebase/firestore";
const firestore = getFirestore(firebaseApp);

const ChatScreen = ({channelActive, user, photo}) => {
    const [ messages, setMessages ] = useState('')

    const sendMessage= (e) => {
        e.preventDefault();
        const messageRef = doc(firestore, `channels/${channelActive}/messages/${new Date().getTime()}`);
        setDoc(messageRef, {
            photo,
            user,
            messages,
            id: new Date().getTime()
        });
        setMessages('')
    }
    return (
        <div className='chat'>
            <HeaderChat channelActive={channelActive} />
            <div className='chat__messages'>
                {/* {mostrar mensajes} */}
            </div>
            <div className='chat__input'>
                <AddCircle fontSize="large" />
                <form 
                    onSubmit={sendMessage}
                >
                    <input
                        type="text"
                        disabled={channelActive ? false : true}
                        value={messages}
                    onChange={(e) => setMessages(e.target.value)}
                        placeholder={channelActive && `Enviar mensaje a # ${channelActive || ""}`}
                    />
                    <button
                        disabled={channelActive ? false : true}
                        className="chat__inputButton"
                        type="submit"
                    >
                        Enviar Mensaje
                    </button>
                </form>
                <div className="chat__inputIcons">
                    <CreditCard fontSize="large" />
                    <Gif fontSize="large" />
                    <EmojiEmotions fontSize="large" />
                </div>
            </div>
        </div>
    )
}

export default ChatScreen
