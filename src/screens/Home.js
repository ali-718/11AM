import React, { Component } from "react";
import { Link } from "react-router-dom";
import * as f from "firebase";

export default class Home extends Component {
  componentWillUnmount() {
    console.log("I am unmounted");
  }

  componentDidMount() {
    // Add Data
    // f.database().ref("users").push({
    //   Name: "Asad",
    //   Age: 21,
    // });

    // Remove Data
    // f.database().ref("users").child("-M5cJ-lFQ5M4G2N26w3G").remove();

    // Update Data
    f.database().ref("users").child("-M5cJ1TB-Re5uE42tTeT").update({
      Age: 25,
    });
  }

  render() {
    return (
      <div>
        <h1>Home</h1>
        <Link to="/about">Go to about page</Link>
      </div>
    );
  }
}
