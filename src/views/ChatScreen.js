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
import Message from '../components/Message';

const firestore = getFirestore(firebaseApp);


const ChatScreen = ({channelActive, user, photo}) => {
    const [ messages, setMessages ] = useState('');
    const [ listMessages, setListMessages] = useState([])
    const anchor = useRef();

    const sendMessage= (e) => {
        e.preventDefault();
        const messageRef = doc(firestore, `channels/${channelActive}/messages/${new Date().getTime()}`);
        setDoc(messageRef, {
            photo,
            user,
            messages,
            id: new Date().getTime()
        });
        getListMessages()
        setMessages('')
        anchor.current.scrollIntoView({ behavior: "smooth" });
    }

    const getListMessages = async () =>{
        const list = [];
        const collectionRef = collection(firestore, `channels/${channelActive}/messages` )
        const res= await  getDocs(collectionRef)
            res.forEach(item => {
               
                list.push(item.data())
            });
            setListMessages(list)
            //anchor.current.scrollIntoView({ behavior: "smooth" });
    
    }

    useEffect(() => {
        channelActive && getListMessages()
    }, [channelActive])
    return (
        <div className='chat'>
            <HeaderChat channelActive={channelActive} />
            <div className='chat__messages'>
            {listMessages &&
                listMessages.map((message) => {
                    return <Message message={message} key={message.id}/>;
                    }) }
                <div ref={anchor} style={{ marginBottom: "75px" }}></div>
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
