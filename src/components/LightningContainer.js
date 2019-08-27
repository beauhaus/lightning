import React, { Component } from "react";
import ALine from "./ALine";
import BLine from "./BLine";
import CLine from "./CLine";
import DLine from "./DLine";
import ELine from "./ELine";

import randInRange from "./randInRange";

function gimmeMin(a, b) {
  return a > b ? b : a;
}

function gimmeMax(a, b) {
  return a > b ? a : b;
}

const width = 1000;
const height = 1000;

// const boltDistance = 4 * Math.pow(randInRange(0.25, 1.5), 3);
const boltDistance = 1;
class Lightning extends Component {
  constructor(props) {
    super(props);
    this.state = {
      A0Joint: { x: 50, y: 0 },
      ABJoint: { x: 50, y: 20 },
      BCJoint: { x: 50, y: 40 },
      CDJoint: { x: 50, y: 40 },
      DEJoint: { x: 50, y: 40 },
      E0Joint: { x: 50, y: 100 }
    };
  }
  //NOTE: change 100 to "width" var
  componentDidMount() {
    const nodeHeight = height / 5;
    const xrangeFactor = boltDistance * 50; // should be a function of width ...
    const A0x = randInRange(1, width); //width
    const ABx = randInRange(
      gimmeMax(A0x - 1 * xrangeFactor, 0),
      gimmeMin(width, A0x + 1 * xrangeFactor)
    );
    const BCx = randInRange(
      gimmeMax(ABx - 2 * xrangeFactor, 0),
      gimmeMin(width, ABx + 2 * xrangeFactor)
    );
    const CDx = randInRange(
      gimmeMax(BCx - 1.5 * xrangeFactor, 0),
      gimmeMin(width, BCx + 1.5 * xrangeFactor)
    );
    const DEx = randInRange(
      gimmeMax(CDx - 1 * xrangeFactor, 0),
      gimmeMin(width, CDx + 1 * xrangeFactor)
    );
    const E0x = randInRange(
      gimmeMax(DEx - 0.5 * xrangeFactor, 0),
      gimmeMin(width, DEx + 0.5 * xrangeFactor)
    );

    const yRange = 1 * nodeHeight;
    console.log(4 + 2 * 3);
    const A0y = 0;
    const ABy = randInRange(
      gimmeMax(nodeHeight - yRange, A0y + 3),
      nodeHeight + yRange
    );
    const BCy = randInRange(
      gimmeMax(2 * nodeHeight - yRange, ABy + 3),
      2 * nodeHeight + yRange
    );
    const CDy = randInRange(
      gimmeMax(3 * nodeHeight - yRange, BCy + 3),
      3 * nodeHeight + yRange
    );
    const DEy = randInRange(
      gimmeMax(4 * nodeHeight - yRange, CDy + 3),
      4 * nodeHeight + yRange
    );
    const E0y = height;

    this.setState(() => ({
      A0Joint: { x: A0x, y: A0y },
      ABJoint: { x: ABx, y: ABy },
      BCJoint: { x: BCx, y: BCy },
      CDJoint: { x: CDx, y: CDy },
      DEJoint: { x: DEx, y: DEy },
      E0Joint: { x: E0x, y: E0y }
    }));
  }
  render() {
    const { A0Joint, ABJoint, BCJoint, CDJoint, DEJoint, E0Joint } = this.state;
    return (
      <svg
        viewBox={`0 0 ${width} ${height}`}
        preserveAspectRatio="none"
        strokeWidth={boltDistance}
      >
        <rect id="back" x="0" y="0" />
        <ALine top={A0Joint} bot={ABJoint} />
        <BLine top={ABJoint} bot={BCJoint} />
        <CLine top={BCJoint} bot={CDJoint} />
        <DLine top={CDJoint} bot={DEJoint} />
        <ELine top={DEJoint} bot={E0Joint} />
      </svg>
    );
  }
}

export default Lightning;
