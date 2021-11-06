import React from "react";

import { Avatar } from "@material-ui/core";

function Message({ message }) {

  return (
    <div className="message">
      <Avatar src={message.photo} />

      <div className="message__info">
        <h4 
          style={{
            color: '#808080',
          }}
        >
          {message.user}
          <span className="message__timestamp">
            {new Date(message.id).toLocaleString}
          </span>
        </h4>

        <p style={{
          fontSize: '20px',
          //color: 'red'
        }}>{message.messages}</p>
      </div>
    </div>
  );
}

export default Message;