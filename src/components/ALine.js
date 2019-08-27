import React from "react";

const ALine = ({ top, bot }) => {
  return (
    <g>
      <text x={top.x + 3} y={top.y + 2}>
        A {top.x} : {top.y}
      </text>
      <line id="A-line" x1={top.x} y1={top.y} x2={bot.x} y2={bot.y} />
      <text x={bot.x + 2} y={bot.y}>
        A {bot.x} : {bot.y}
      </text>
    </g>
  );
};

export default ALine;
