import React from "react";
import "./BackgroundScreen.css";
import Header from "./components/Header";
import LeftContainer from "./components/LeftContainer";
import RightContainer from "./components/RightContainer";
function BackgroundScreen() {
  return (
    <div className="BackgroundScreen">
      <Header />
      <RightContainer />
      <LeftContainer />
    </div>
  );
}
export default BackgroundScreen;
