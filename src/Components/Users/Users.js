import React from "react";
import UserItem from "./UserItem";
import Spinner from "../layout/Spinner";
const Users = ({ users, loading }) => {
  if (loading) {
    return <Spinner />;
  } else {
    return (
      <div style={UserStyle}>
        {users.map(user => (
          <UserItem key={user.id} user={user}></UserItem>
        ))}
      </div>
    );
  }
};
const UserStyle = {
  display: "grid",
  gridGap: "1rem",
  gridTemplateColumns: "repeat(3, 1fr)"
};
export default Users;
