import React from "react";
import SecondlineLeftContainer from "./SecondlineLeftContainer";
import HeaderLeftContainer from "./HeaderLeftContainer";

import "./LeftContainer.css";
import "tachyons";
function LeftContainer() {
  return (
    <div className="LeftContainer">
      <HeaderLeftContainer />
      <SecondlineLeftContainer />
    </div>
  );
}
export default LeftContainer;
