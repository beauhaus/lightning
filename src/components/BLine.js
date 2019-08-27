import React from "react";

const BLine = ({ top, bot }) => {
  return <line id="B-line" x1={top.x} y1={top.y} x2={bot.x} y2={bot.y} />;
};

export default BLine;
