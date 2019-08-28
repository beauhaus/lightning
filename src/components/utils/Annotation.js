import React from "react";

const Annotation = ({ coords }) => {
  const coordsArray = Object.values(coords);
  return (
    <g>
      {coordsArray.map((item, idx) => (
        <text key={idx} x="20" y={item.y}>
          {item.x}:{item.y}
        </text>
      ))}
    </g>
  );
};

export default Annotation;
