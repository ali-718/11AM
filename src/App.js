// import React, { Component } from "react";
// import { Box, BlueBox } from "./Box";

// const MyData = { Name: "ALi Haider", Age: 25, Company: "BizIntel" };

// export default class App extends Component {
//   ShowAlert = () => {
//     this.setState({
//       Name: "Jaffar",
//     });
//   };

//   state = {
//     Name: "ALi Haider",
//     Age: 25,
//     Company: "BizIntel",
//   };

//   //lifecycle Methods

//   componentDidMount() {
//     console.log("I am component did mount");
//   }

//   componentDidUpdate() {
//     console.log("I am component did update");
//   }

//   //  componentWillReceiveProps(){
//   //  }

//   constructor() {
//     super();
//     console.log("Constructor");
//   }

//   render() {
//     console.log("I am render");

//     return (
//       <React.Fragment>
//         <div style={{ width: 100, height: 100, backgroundColor: "red" }}></div>
//         <Box />
//         <BlueBox
//           MyFunction={() => this.ShowAlert()}
//           Title={"Jaffar"}
//           data={this.state}
//         />
//       </React.Fragment>
//     );
//   }
// }

import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./screens/Home";
import About from "./screens/About";
import Test from "./screens/Test";
import Profile from "./screens/Profile";
import ErrorPage from "./screens/Error";
import "./config";

export default class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route path="/about/test" component={Test} />
          <Route path="/user/:username" component={Profile} />
          <Route component={ErrorPage} />
        </Switch>
      </Router>
    );
  }
}
