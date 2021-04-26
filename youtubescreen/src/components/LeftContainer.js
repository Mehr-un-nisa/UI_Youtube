import React from "react";
import SecondLeftContainer from "./SecondLeftContainer";
import HeaderLeftContainer from "./HeaderLeftContainer";
import "./LeftContainer.css";
import "tachyons";
function LeftContainer() {
  return (
    <div className="LeftContainer">
      <HeaderLeftContainer />
      <SecondLeftContainer />
    </div>
  );
}
export default LeftContainer;
