import React from "react";
import "./BackgroundScreen.css";
import Header from "./components/Header";
import RightContainer from "./components/RightContainer";
import Footer from "./components/Footer";
import Screen from "./components/Screen.png";
function BackgroundScreen() {
  return (
    <div className="BackgroundScreen">
      <Header />
      <RightContainer />
      <Footer />
      <div className="CentreImage">
        <img src={Screen} alt="" height="480px" />
      </div>
    </div>
  );
}
export default BackgroundScreen;
