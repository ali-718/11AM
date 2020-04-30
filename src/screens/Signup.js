import React, { Component } from "react";
import * as f from "firebase";

export default class Signup extends Component {
  state = {
    Email: "",
    Password: "",
  };

  Signup = () => {
    f.auth().createUserWithEmailAndPassword(
      this.state.Email,
      this.state.Password
    );
  };

  render() {
    return (
      <div>
        <center>
          <div>
            <input
              type="text"
              placeholder="email"
              value={this.state.Email}
              onChange={(e) => this.setState({ Email: e.target.value })}
            />
            <input
              type="password"
              placeholder="password"
              value={this.state.Password}
              onChange={(e) => this.setState({ Password: e.target.value })}
            />
            <button onClick={() => this.Signup()}>Signup</button>
          </div>
        </center>
      </div>
    );
  }
}
