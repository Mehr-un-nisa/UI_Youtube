import React from "react";
import Javaa from "./Javaa.jpg";
import News from "./News.jpg";
import MCU from "./MCU.jpg";
import Viliam from "./Viliam.jpg";
import ColoredImacs from "./ColoredImacs.jpg";

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
        <div className="images">
          <img src={Javaa} />
          <img src={News} />
          <img src={MCU} />
          <img src={Viliam} />
          <img src={ColoredImacs} />
        </div>
      </div>
      <div className="imagetext"></div>
    </div>
  );
}
export default RightContainer;
