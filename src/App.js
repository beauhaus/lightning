import React from "react";
import ReactDOM from "react-dom";
import Trigger from "./components/Trigger";

import "./styles.css";

const App = () => {
  return (
    <svg viewBox="0 0 1000 1000" className="App">
      <Trigger />
    </svg>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
