import React from "react";

import ReactDOM from "react-dom";
import Header from "./components/Header";
import LeftContainer from "./components/LeftContainer";
import "tachyons";
import "./index.css";

import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <React.StrictMode>
    <Header />
    <LeftContainer />
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
