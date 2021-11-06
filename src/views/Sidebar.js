import React, {useEffect, useState} from 'react';
import { Avatar } from '@material-ui/core';
import { ExpandMore, Add, Settings, Mic, Headset } from '@material-ui/icons';

import firebaseApp from '../firebase/credenciales';
import {
  getFirestore,
  collection,
  doc,
  setDoc,
  getDocs,
} from "firebase/firestore";
import SidebarChannel from '../components/SidebarChannel';

const fireStore = getFirestore(firebaseApp);

const Sidebar = ({userGlober, setChannelActive}) => {

  const [listChannels, setListsChannels] = useState([])

  async function getChannels() {
    const list = [];
    const collectionRef = collection(fireStore, "channels");
    const data = await getDocs(collectionRef);
    data.forEach((item) => {
      list.push(item.data());
    });

    setListsChannels(list);
  }

  useEffect(() => {
    getChannels();
  }, []);
    
    const addChannel = () =>{
      const nameChannel = prompt('¿Cual es el nombre del canal?')
      if (nameChannel) {
        const channelRef = doc(fireStore, `channels/${nameChannel}`)
         setDoc(channelRef, {
          id: new Date().getTime(),
          name: nameChannel,
        })
      }
      getChannels();
      
    }
    return (
        <div className="sidebar">
          <div className="sidebar__top">
            <h3> Servidor de Lasfito</h3>
            <ExpandMore />
          </div>
    
          <div className="sidebar__channels">
            <div className="sidebar__channelsHeader">
              <div className="sidebar__header">
                <ExpandMore />
                <h4>Canales de texto</h4>
              </div>
    
              <Add className="sidebar__addChannel" onClick={addChannel} />
            </div>
    
            <div className="sidebar__channelsList">
              {listChannels ? listChannels.map(channel => (
                <div onClick={() =>setChannelActive(channel.name)} key={channel.id}>
                  <SidebarChannel name={channel.name} id={channel.id}/>
                </div>
              )) : null}
            </div>
          </div>
    
          <div className="sidebar__profile">
            <Avatar src={userGlober.photoURL} />>
            <div className="sidebar__profileInfo">
                <h3>{userGlober.displayName}</h3>
                <p>{userGlober.uid.substring(0, 4)} </p>
            </div>
            {/* <div className="sidebar__profileIcons">
              <Mic />
              <Headset />
              <Settings onClick={() => signOut(auth)} />
            </div> */}
          </div>
        </div>
      );
}

export default Sidebar
