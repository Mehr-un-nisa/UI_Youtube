import React from "react";
import ReactDOM from "react-dom";
import Header from "./Header";
import LeftContainer from "./LeftContainer";
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
