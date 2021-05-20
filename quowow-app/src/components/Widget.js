import React from "react";
import "../styles/Widget.css";
import WidgetOptions from "./WidgetOptions";

function Widget() {
  return (
    <div className="widget">
      <div className="widget__header">
        {" "}
        <h5>Spaces to Follow</h5>
      </div>
      <div className="widget__contents">
        <WidgetOptions />
      </div>
    </div>
  );
}

export default Widget;
