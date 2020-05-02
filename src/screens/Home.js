import React, { Component } from "react";
import { Link } from "react-router-dom";
import * as f from "firebase";

export default class Home extends Component {
  state = {
    isUser: false,
  };

  componentWillUnmount() {
    console.log("I am unmounted");
  }

  componentDidMount() {
    f.auth().onAuthStateChanged((user) => {
      if (user) {
        console.log("user logged in");
        this.setState({
          isUser: true,
        });
      } else {
        console.log("user not logged in");
        this.props.history.push("/login");
      }
    });
  }

  render() {
    return (
      <div>
        {this.state.isUser == true ? (
          <div>
            <h1>Home</h1>
            <Link to="/about">Go to about page</Link>
          </div>
        ) : (
          <h1>Loaing</h1>
        )}
      </div>
    );
  }
}
