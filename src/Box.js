import React, { Component } from "react";

export class Box extends Component {
  render() {
    return (
      <div style={{ width: 300, height: 100, backgroundColor: "green" }}></div>
    );
  }
}

export class BlueBox extends Component {
  render() {
    return (
      <div style={{ width: 300, height: 100, backgroundColor: "blue" }}></div>
    );
  }
}
