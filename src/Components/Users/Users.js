import React, { useContext } from "react";
import UserItem from "./UserItem";
import Spinner from "../layout/Spinner";
import GithubContext from "../../context/github/github";
const Users = () => {
  const githubContext = useContext(GithubContext);
  const { users, loading } = githubContext;
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
