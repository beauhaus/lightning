import React from "react";

const ELine = ({ top, bot }) => {
  return <line id="E-line" x1={top.x} y1={top.y} x2={bot.x} y2={bot.y} />;
};

export default ELine;
