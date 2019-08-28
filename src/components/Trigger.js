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
  componentDidUpdate() {
    var max = 10000;
    var min = 100;
    var timer = Math.floor(Math.random() * (max - min) + 1) + min;
    const randoTimer = () => {
      this.setState(prevState => ({
        play: !prevState.play,
        timeSpan: timer
      }));
    };
    setTimeout(randoTimer, timer);
  }
  render() {
    return (
      <g>
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
