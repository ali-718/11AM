import React, { Component } from "react";

export class Box extends Component {
  render() {
    return (
      <div style={{ width: 300, height: 100, backgroundColor: "green" }}></div>
    );
  }
}

export class BlueBox extends Component {
  constructor(props) {
    super(props);

    setInterval(() => {
      console.log(props.data);
    }, 1000);
  }

  render() {
    return (
      <div style={{ width: 300, height: 100, backgroundColor: "blue" }}>
        <h4>{this.props.Title}</h4>
        <h5>Name :- {this.props.data.Name}</h5>
        <h5>Age :- {this.props.data.Age}</h5>
        <h5>Company :- {this.props.data.Company}</h5>
        <button
          onClick={() => {
            this.props.MyFunction();
          }}
        >
          Change Name
        </button>
      </div>
    );
  }
}
