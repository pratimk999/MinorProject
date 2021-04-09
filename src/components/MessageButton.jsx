import React, { useState } from "react";
import message from "../assets/email.png";
import cross from "../assets/cross.png";
import "../styling/MessageButton.css";
function MessageButton() {
  const [isOpen, setIsOpen] = useState(false);

  const open = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <div className="chatbot">
        {isOpen && (
          <iframe
            allow="microphone;"
            width="350"
            height="430"
            src="https://console.dialogflow.com/api-client/demo/embedded/1c26e8ec-a5be-433c-833a-3d27f06aa39d"
            title="chatbot"
            data-aos="flip-left"
          ></iframe>
        )}
      </div>
      <div className="messageButton" onClick={open} data-aos="flip-right">
        {isOpen ? <img src={cross} alt="" /> : <img src={message} alt="" />}
      </div>
    </>
  );
}

export default MessageButton;
