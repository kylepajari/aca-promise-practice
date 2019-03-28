import React from "react";
import { connect } from "react-redux";

const UsersCount = props => {
  return (
    <div id="users-count">
      {props.users && (
        <p>
          <b>User Count:</b> {props.users.length}
        </p>
      )}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    users: state.users
  };
};

export default connect(
  mapStateToProps,
  null
)(UsersCount);
