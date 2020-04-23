import React, { Component } from "react";

export default class ErrorPage extends Component {
  render() {
    return (
      <div>
        <h1>404 page not found</h1>
        <button onClick={() => this.props.history.goBack()}>Go Back</button>
        <button onClick={() => this.props.history.push("/")}>
          Go to Home Page
        </button>
      </div>
    );
  }
}
