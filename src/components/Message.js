import React from "react";

import { Avatar } from "@material-ui/core";

function Message({ message }) {
  return (
    <div className="message">
      <Avatar src={message.foto} />

      <div className="message__info">
        <h4>
          {message.usuario}
          <span className="message__timestamp">
            {new Date(message.id).toLocaleString}
          </span>
        </h4>

        <p>{message.mensaje}</p>
      </div>
    </div>
  );
}

export default Message;