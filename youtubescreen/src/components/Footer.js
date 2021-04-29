import React from "react";
import "./Footer.css";
import { TiThumbsUp } from "react-icons/ti";
import { TiThumbsDown } from "react-icons/ti";
import { BiShare } from "react-icons/bi";
import { BiSave } from "react-icons/bi";
import { BiDotsHorizontal } from "react-icons/bi";
function Footer() {
  return (
    <div className="FooterIconPlusText">
      C# Message Box with Yes No button C#
      <br />
      <span className="FooterGreyText">8,809 views . 28 Mar 2018</span>
      <div className="FooterRightIcons">
        <TiThumbsUp />
        <div className="FooterIconText"> 49 </div>
        <li />
        <TiThumbsDown />
        <div className="FooterIconText">3</div>
        <li />
        <BiShare />
        <div className="FooterIconText">SHARE</div>
        <li />
        <BiSave />
        <div className="FooterIconText">SAVE</div>
        <li />
        <BiDotsHorizontal />
      </div>
    </div>
  );
}
export default Footer;
