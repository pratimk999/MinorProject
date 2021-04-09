import React from "react";
import { Button } from "react-bootstrap";
import chatBot from "../assets/CHATBOTPIC.PNG";
import "../styling/Page.css";
function Page() {
  return (
    <div className="page">
      <div className="page__left" data-aos="fade-right">
        <h5>Simple Process With Chatbot</h5>
        <p>
          Intelligent chatBot which serves your guests 24/7 while you save time
        </p>
        <Button>Get Started</Button>
      </div>
      <div className="page__right" data-aos="fade-left">
        <img src={chatBot} alt="" />
      </div>
    </div>
  );
}

export default Page;
