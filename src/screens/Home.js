import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Home extends Component {
  componentWillUnmount() {
    console.log("I am unmounted");
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
