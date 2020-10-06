import React from "react";
import "./style.css";

function Buttons (props) {
  return (
  <div>
    <div className="row buttonrow">
        <div className="col"></div>
        <div className="col"><button className="card-btn" onClick={props.sort}>Sort by Name</button></div>
        <div className="col"><button className="card-btn" onClick={props.sort}>Sort by Phone</button></div>
        <div className="col"><button className="card-btn" onClick={props.sort}>Sort by Email</button></div>
        <div className="col"><button className="card-btn" onClick={props.sort}>Sort by DOB</button></div>
    </div>
  </div>
  );
}

export default Buttons;