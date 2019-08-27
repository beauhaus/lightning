import React from "react";

const DLine = ({ top, bot }) => {
  return <line id="D-line" x1={top.x} y1={top.y} x2={bot.x} y2={bot.y} />;
};

export default DLine;
