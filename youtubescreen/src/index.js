import React from "react";

import ReactDOM from "react-dom";
import Header from "./components/Header";
import LeftContainer from "./components/LeftContainer";
import "tachyons";
import "./index.css";

import reportWebVitals from "./reportWebVitals";
import RightContainer from "./components/RightContainer";

ReactDOM.render(
  <React.StrictMode>
    <Header />
    <RightContainer />
    <LeftContainer />
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
