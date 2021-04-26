import React from "react";
import "./Header.css";
import Searchbar from "./Searchbar";

import { BiMenu } from "react-icons/bi";
import { BiPlay } from "react-icons/bi";
import { BiMicrophone } from "react-icons/bi";
import { BiVideoPlus } from "react-icons/bi";
import { HiAdjustments } from "react-icons/hi";
import { BiBell } from "react-icons/bi";

function Header() {
  return (
    <div className="header">
      <div className="lefticons">
        <BiMenu />
        <BiPlay />
      </div>
      <span>YouTube</span>
      <sub>PK</sub>

      <Searchbar />

      <div className="righticons">
        <BiMicrophone />
        <BiVideoPlus />
        <HiAdjustments />
        <BiBell />
      </div>
    </div>
  );
}
export default Header;
