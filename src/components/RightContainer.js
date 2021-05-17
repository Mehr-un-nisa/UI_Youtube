import React from "react";
import Javaa from "./Javaa.jpg";
import News from "./News.jpg";
import MCU from "./MCU.jpg";
import Viliam from "./Viliam.jpg";
import ColoredImacs from "./ColoredImacs.jpg";
import { BiCheckCircle } from "react-icons/bi";

import "./RightContainer.css";

function RightContainer() {
  return (
    <div className="rightside">
      <div className="righticonbuttonheader">
        <div className="buttonclass">
          <button className="All"> All</button>
          <button className="C"> C#</button>
          <button className="databases"> Databases</button>
          <button className="Cplus"> C++</button>
          <button className="computers"> Computers</button>
        </div>
      </div>
      <div className="rightimagetext">
        <div className="images">
          <img src={Javaa} alt="" />
          <img src={News} alt="" />
          <img src={MCU} alt="" />
          <img src={Viliam} alt="" />
          <img src={ColoredImacs} alt="" />
        </div>

        <div className="rightcontainertext">
          <div className="ImageHeadingText">
            <h1>Java Project Tutorial - Make Login and Register form step..</h1>
            <span className="GreysmallText">
              1BestCsharp blog <br />
              12M views . 2 years ago
            </span>
          </div>

          <div className="ImageHeadingText">
            <h1>JWATCH GEO NEWS LIVE | Pakistan News LIVE, Updates</h1>
            <span className="GreysmallText">
              Geo News <BiCheckCircle />
              <br />
              12K watching
              <br />
              LIVE NOW
            </span>
          </div>

          <div className="ImageHeadingText">
            <h1>MCU HISHE Compilation Volume Two</h1>
            <span className="GreysmallText">
              How it should have ended <BiCheckCircle />
              <br />
              7.2M views . 2 years ago
            </span>
          </div>

          <div className="ImageHeadingText">
            <h1>Viliam Pub Compilation - Volume One</h1>
            <span className="GreysmallText">
              How it should have ended <BiCheckCircle />
              <br />
              4.9M views . 3 years ago
            </span>
          </div>

          <div className="ImageHeadingText">
            <h1>Colored iMacs? Let's Talk About Apple's 4/20 Event!</h1>
            <span className="GreysmallText">
              Marques Brownlee <BiCheckCircle />
              <br />
              1.7M views . 13 years ago
              <br />
              New
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
export default RightContainer;
