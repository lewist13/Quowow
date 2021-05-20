import React from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import "../styles/Quowow.css";

function Quowow() {
  return (
    <div className="quowow">
      <Navbar />
      <div className="quowow__content">
        <Sidebar />
      </div>
    </div>
  );
}

export default Quowow;
