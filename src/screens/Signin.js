import React, { Component } from "react";
import * as f from "firebase";

export default class Signin extends Component {
  state = {
    Email: "",
    Password: "",
  };

  Signin = () => {
    f.auth()
      .signInWithEmailAndPassword(this.state.Email, this.state.Password)
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.log(error.message);
        alert(error.message);
      });
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
            <button onClick={() => this.Signin()}>Login</button>
          </div>
        </center>
      </div>
    );
  }
}
