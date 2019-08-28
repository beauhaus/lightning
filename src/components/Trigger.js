import React, { Component } from "react";
// import LightningContainer from "./LightningContainer";
// import RandoTime from "./utils/RandoTime";

class Trigger extends Component {
  constructor(props) {
    super(props);
    this.state = { timeSpan: 15000 };
  }
  componentDidMount() {
    this.setState({ play: false });
  }
  componentWillUpdate() {
    // const RandoTime = timeSpan => {
    // timeSpan = Math.floor(Math.random(15000, 15000) * 15000);
    // this.setState(prevState => ({ play: !prevState.play }));
    // console.log(timeSpan);
    // this.setState((prevState) => {
    //   timeSpan,
    // })
    // setTimeout(RandoTime, timeSpan);
    // };
    // setTimeout(RandoTime, 15000);
  }
  render() {
    return (
      <g>
        <text x="400" y="400">
          {this.state.timeSpan}
        </text>
        {this.state.show ? (
          // <Bolt time={this.state.randInterval} />
          <g>{/* <LightningContainer /> */}</g>
        ) : (
          <text x="300" y="400">
            noop!
          </text>
        )}
      </g>
    );
  }
}

export default Trigger;
