import React from "react";

/* This is a composite of
 * lightning bolt and decay path beneath it
 */

const Bolt = ({ coords }) => {
  const coordsArray = Object.values(coords);
  // get 1st element & remove from array
  const shiftedCoords = Object.values(coordsArray.shift());
  const A0Coords = shiftedCoords.toString();
  // stringify values from remaining elements
  const coordList = coordsArray.map(item => item.x + "," + item.y);

  return (
    <g>
      <path className="decayer" d={`M${A0Coords} L${coordList}`} />
      <path className="bolt" d={`M${A0Coords} L${coordList}`} />
    </g>
  );
};

export default Bolt;
