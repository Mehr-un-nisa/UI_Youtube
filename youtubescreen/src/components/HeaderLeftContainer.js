import React from "react";
import "./HeaderLeftContainer.css";
import { FaReply } from "react-icons/fa";
import { BiSearch } from "react-icons/bi";
import { BiMinus } from "react-icons/bi";
import { BiDuplicate } from "react-icons/bi";
import { BiX } from "react-icons/bi";

function HeaderLeftContainer() {
  return (
    <div className="container">
      <div className="containerHeader">
        <div className="lefticonVisual">
          <FaReply />
        </div>
        <div id="visualtextheading">
          <p className="startpage">StartPage - Microsoft Visual Studio</p>
        </div>
        <div className="containersearchbox">
          <input
            className="bg-white"
            type="Search Bar"
            placeholder="Quick Launch(Ctrl+Q)"
          />
        </div>
        <div className="RightIconsofContainer">
          <BiSearch />
          <BiMinus />
          <BiDuplicate />
          <BiX />
        </div>
      </div>
      <div className="SecondLineText">
        <h1>FILE</h1>
        <h1>EDIT</h1>
        <h1>VIEW</h1>
        <h1>DUBUG</h1>
        <h1>TEAM</h1>
        <h1>SQL</h1>
        <h1>TOOLS</h1>
        <h1>TEST</h1>
        <h1>ARCHITECTURE</h1>
        <h1>ANALYZE</h1>
        <h1>WINDOW</h1>
        <h1>HELP</h1>
      </div>
    </div>
  );
}
export default HeaderLeftContainer;
