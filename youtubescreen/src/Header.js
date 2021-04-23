import React from "react";
import "./Header.css";
import Searchbar from "./Searchbar";

import { HiArrowCircleRight } from "react-icons/hi";
import { HiArchive } from "react-icons/hi";

import { HiAnnotation } from "react-icons/hi";
import { HiArrowCircleLeft } from "react-icons/hi";
import { HiAdjustments } from "react-icons/hi";
import { FaRss } from "react-icons/fa";

function Header() {
  return (
    <div className="header">
      <div className="lefticons">
        <div className="HiArrowCircleRight">
          <HiArrowCircleRight />
        </div>
        <div className="youtubeicon">
          <HiArchive />
        </div>
      </div>
      <span>YouTube</span>
      <sub>PK</sub>

      <Searchbar />

      <div className="righticons">
        <div className="HiAnnotaion">
          <HiAnnotation />
        </div>
        <div className="HiArrowCircleLeft ">
          <HiArrowCircleLeft />
        </div>
        <div className="HiAdjustments">
          <HiAdjustments />
        </div>
        <div className="FaRss">
          <FaRss />
        </div>
      </div>
    </div>
  );
}
export default Header;
