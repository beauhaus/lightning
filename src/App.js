import React from "react";
import ReactDOM from "react-dom";
import LightningContainer from "./components/LightningContainer";

import "./styles.css";

const App = () => {
  return (
    <div className="App">
      <LightningContainer />
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
