import React from "react";

const CLine = ({ top, bot }) => {
  return <line id="C-line" x1={top.x} y1={top.y} x2={bot.x} y2={bot.y} />;
};

export default CLine;
