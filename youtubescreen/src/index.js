import React from "react";
import BackgroundScreen from "./BackgroundScreen";
import ReactDOM from "react-dom";

import "tachyons";
import "./index.css";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <React.StrictMode>
    <BackgroundScreen />
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
