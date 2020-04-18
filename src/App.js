import React, { Component } from "react";
import { Box, BlueBox } from "./Box";

const MyData = { Name: "ALi Haider", Age: 25, Company: "BizIntel" };

export default class App extends Component {
  ShowAlert = () => {
    alert("I am ali");
  };

  render() {
    return (
      <React.Fragment>
        <div style={{ width: 100, height: 100, backgroundColor: "red" }}></div>
        <Box />
        <BlueBox
          MyFunction={() => this.ShowAlert()}
          Title={"Jaffar"}
          data={MyData}
        />
      </React.Fragment>
    );
  }
}
