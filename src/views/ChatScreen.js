import React, { useState, useEffect, useRef } from "react";

import { AddCircle, CreditCard, Gif, EmojiEmotions } from "@material-ui/icons";

import HeaderChat from '../components/HeaderChat';
const ChatScreen = ({channelActive}) => {
    const [ messages, setMessages ] = useState('')
    return (
        <div className='chat'>
            <HeaderChat channelActive={channelActive} />
            <div className='chat__messages'>
                {/* {mostrar mensajes} */}
            </div>
            <div className='chat__input'>
                <AddCircle fontSize="large" />
                <form 
                //onSubmit={enviarMensaje}
                >
                <input
                    type="text"
                    //disabled={canalActivo ? false : true}
                    value={messages}
                   onChange={(e) => setMessages(e.target.value)}
                    placeholder={channelActive && `Enviar mensaje a # ${channelActive || ""}`}
                />
                <button
                    //disabled={canalActivo ? false : true}
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
