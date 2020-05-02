import React, { Component } from "react";

export default class Loading extends Component {
  componentDidMount() {
    f.auth().onAuthStateChanged((user) => {
      if (user) {
        console.log("user logged in");
      } else {
        console.log("user not logged in");
        this.props.history.push("/login");
      }
    });
  }

  render() {
    return (
      <div>
        <h1>Loading</h1>
      </div>
    );
  }
}
