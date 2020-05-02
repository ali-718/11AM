import React, { Component } from "react";
import * as f from "firebase";

export default class Signin extends Component {
  state = {
    Email: "",
    Password: "",
    isUser: false,
  };

  componentDidMount() {
    f.auth().onAuthStateChanged((user) => {
      if (user) {
        console.log("user logged in");
        this.props.history.push("/");
      } else {
        console.log("user not logged in");
        this.setState({
          isUser: true,
        });
      }
    });
  }

  Signin = () => {
    f.auth()
      .signInWithEmailAndPassword(this.state.Email, this.state.Password)
      .then((res) => {
        console.log(res);
        this.props.history.push("/");
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
          {this.state.isUser ? (
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
          ) : (
            <h1>Loading</h1>
          )}
        </center>
      </div>
    );
  }
}
