import React, { Component } from "react";
import LightningContainer from "./LightningContainer";

class Trigger extends Component {
  constructor(props) {
    super(props);
    this.state = { timeSpan: 15000 };
  }
  componentDidMount() {
    this.setState({ play: false });
  }
  componentWillUnmount() {
    clearTimeout(this.randoTimer);
  }
  componentWillUpdate() {
    const randoTimer = () => {
      // var time1to15 = Math.ceil(Math.random(500, 10000) * 15) * 1000;
      var time1to15 = 15000; // FOR TESTING
      console.log("one to 15: ", time1to15);
      this.setState(prevState => ({
        play: !prevState.play
      }));
      setTimeout(randoTimer, time1to15);
    };
    setTimeout(randoTimer, 5000);
  }
  render() {
    return (
      <g>
        {/* <rect id="back" x="0" y="0" /> */}
        <text x="400" y="400">
          {this.state.timeSpan}
        </text>
        {this.state.play ? (
          <LightningContainer />
        ) : (
          <text x="300" y="400">
            off
          </text>
        )}
      </g>
    );
  }
}

export default Trigger;
