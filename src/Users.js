import React, { Component, Fragment } from "react";
import { Button } from "@material-ui/core";
import axios from "axios";
import { connect } from "react-redux";

class Users extends Component {
  getUsers = () => {
    console.log("running get users...");

    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then(res => this.props.setUsers(res.data))
      .catch(error => console.log("error: ", error));
  };
  render() {
    return (
      <Fragment>
        <div>
          <h3>Press the button to get users and display them below</h3>
          <Button onClick={this.getUsers} variant="contained" color="primary">
            Get Users
          </Button>
        </div>
        <div className="users-block">
          {this.props.users.map(user => {
            return (
              <div key={user.name}>
                Name: {user.name}
                UserName: {user.username}
                Email: {user.email}
                Web: {user.website}
              </div>
            );
          })}
        </div>
      </Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    users: state.users
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setUsers: users => dispatch({ type: "SET_USERS", value: users })
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Users);
