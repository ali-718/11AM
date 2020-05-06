import React, { Component } from "react";
import * as f from "firebase";

export default class Users extends Component {
  state = {
    users: [],
    isLoading: true,
    Name: "",
    Age: "",
    onUpdate: false,
    Id: "",
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

  cancel = () => {
    this.setState({
      Name: "",
      Age: "",
      onUpdate: false,
    });
  };

  componentDidMount() {
    this.fetchUsers();
  }

  onEditClick = (Name, Age, id) => {
    this.setState({
      onUpdate: true,
      Name: Name,
      Age: Age,
      Id: id,
    });
  };

  onUpdate = () => {
    f.database()
      .ref("users")
      .child(this.state.Id)
      .update({
        Name: this.state.Name,
        Age: this.state.Age,
      })
      .then(() => {
        this.setState({
          isLoading: true,
          users: [],
          Name: "",
          Age: "",
          Id: "",
          onUpdate: false,
        });
        this.fetchUsers();
      });
  };

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
        {this.state.onUpdate == true ? (
          <div>
            <input
              onChange={(e) => {
                this.setState({
                  Name: e.target.value,
                });
              }}
              type="text"
              placeholder="Name"
              value={this.state.Name}
            />
            <input
              onChange={(e) => {
                this.setState({
                  Age: e.target.value,
                });
              }}
              type="text"
              placeholder="Age"
              value={this.state.Age}
            />
            <button onClick={() => this.onUpdate()}>update</button>
            <button onClick={() => this.cancel()}>cancel</button>
          </div>
        ) : null}

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

                  <button
                    onClick={() =>
                      this.onEditClick(item.Name, item.Age, item.id)
                    }
                  >
                    Edit
                  </button>
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
