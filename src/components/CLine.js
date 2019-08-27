import React from "react";

const CLine = ({ top, bot }) => {
  return (
    <g>
      <text x={top.x + 3} y={top.y + 2}>
        B: {top.x} : {top.y}
      </text>
      <line id="C-line" x1={top.x} y1={top.y} x2={bot.x} y2={bot.y} />
      <text x={bot.x + 2} y={bot.y}>
        B: {bot.x} : {bot.y}
      </text>
    </g>
  );
};

export default CLine;
