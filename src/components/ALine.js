import React from "react";

const ALine = ({ top, bot }) => {
  return <line id="A-line" x1={top.x} y1={top.y} x2={bot.x} y2={bot.y} />;
};

export default ALine;
