import React, { Component } from "react";
import * as f from "firebase";

export default class Users extends Component {
  state = {
    users: [],
    isLoading: true,
  };

  fetchUsers = () => {
    f.database()
      .ref("users")
      .once("value")
      .then((res) => {
        res.forEach((snapshot) => {
          //   this.setState({
          //       users:[]
          //   })

          this.setState({
            users: [
              ...this.state.users,
              { ...snapshot.val(), id: snapshot.key },
            ],
            isLoading: false,
          });
        });
      })
      //   .then(() => {
      //     this.setState({
      //       isLoading: false,
      //     });
      //   })
      .catch();
  };

  componentDidMount() {
    this.fetchUsers();
  }

  onDelete = (id) => {
    // console.log(id);
    f.database()
      .ref("users")
      .child(id)
      .remove()
      .then(() => {
        this.setState({
          isLoading: true,
          users: [],
        });
        this.fetchUsers();
      });
  };

  render() {
    return (
      <div>
        {console.log(this.state)}
        <h1>All Users</h1>

        <center>
          <div style={{ marginTop: 50 }}>
            {this.state.isLoading == true ? (
              <h3>Loading</h3>
            ) : (
              this.state.users.map((item) => (
                <div style={{ marginTop: 50 }}>
                  <h3>Name: {item.Name}</h3>
                  <h3>Age: {item.Age}</h3>

                  <button>Edit</button>
                  <button
                    onClick={() => this.onDelete(item.id)}
                    style={{ marginLeft: 30 }}
                  >
                    Delete
                  </button>
                </div>
              ))
            )}
          </div>
        </center>
      </div>
    );
  }
}
