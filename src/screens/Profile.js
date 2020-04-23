import React, { Component } from "react";

export default class Profile extends Component {
  render() {
    return (
      <div>
        {console.log(this.props)}
        <h1>Profile No. {this.props.match.params.username}</h1>
      </div>
    );
  }
}
