import React from "react";
import ReactDOM from "react-dom";
import Trigger from "./components/Trigger";

import "./styles.css";

const App = () => {
  return (
    <svg viewBox="0 0 1000 1000" className="App" preserveAspectRatio="none">
      <linearGradient
        id="a"
        x1="1000.0"
        x2="1000"
        y1="1000"
        y2="0"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0" stopColor="#876141" />
        <stop offset=".06684741" stopColor="#d4c2b2" />
        <stop offset=".1468" stopColor="#abc8d2" />
        <stop offset=".2424" stopColor="#70a2c7" />
        <stop offset=".4778" stopColor="#2d5386" />
        <stop offset=".6651" stopColor="#152541" />
        <stop offset="1" />
      </linearGradient>
      <rect id="back" x="0" y="0" />

      <Trigger />
    </svg>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
