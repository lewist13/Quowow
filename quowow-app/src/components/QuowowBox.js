import React from "react";
import "../styles/QuowowBox.css";
import { Avatar } from "@material-ui/core";

function QuowowBox() {
  return (
    <div className="quowowBox">
      <div className="quowowBox__info">
        <Avatar />
        <h5>Username</h5>
      </div>
      <div className="quowowBox__quowow">
        <p>What is your question?</p>
      </div>
    </div>
  );
}

export default QuowowBox;
