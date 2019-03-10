import React from "react";
import { render } from "react-dom";
import Axis from "./Axis";
import Barchart from "./Barchart"

import "./styles/barchart.css"

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};

const App = () => (
  <svg width="800" height="400" id="svg">
    <Barchart width={300} height={200} />
  </svg>
);

render(<App />, document.getElementById("root"));
