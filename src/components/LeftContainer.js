import React from "react";
import Purplebox from "./Purplebox";
import HeaderLeftContainer from "./HeaderLeftContainer";

import "./LeftContainer.css";
import "tachyons";
function LeftContainer() {
  return (
    <div className="LeftContainer">
      <HeaderLeftContainer />
      <Purplebox />
    </div>
  );
}
export default LeftContainer;
