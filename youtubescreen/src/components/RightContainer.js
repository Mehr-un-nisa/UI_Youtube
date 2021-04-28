import React from "react";
import { FaBluetoothB } from "react-icons/fa";
import "./RightContainer.css";
// import { FaReply } from "react-icons/fa";
function RightContainer() {
  return (
    <div className="rightside">
      <div className="righticonheader">
        <div className="buttonclass">
          <button className="All"> All</button>
          <button className="C"> C#</button>
          <button className="databases"> Databases</button>
          <button className="Cplus"> C++</button>
          <button className="computers"> Computers</button>
        </div>
      </div>
      <div className="bg-green">
        <div className="images"></div>
      </div>
    </div>
  );
}
export default RightContainer;
