import React, { Component } from "react";
import { Box, BlueBox } from "./Box";

export default class App extends Component {
  render() {
    return (
      <React.Fragment>
        <div style={{ width: 100, height: 100, backgroundColor: "red" }}></div>
        <Box />
        <BlueBox />
      </React.Fragment>
    );
  }
}
