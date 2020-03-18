import React, { Component } from "react";
import UserItem from "./UserItem";
class Users extends Component {
  state = {
    users: [
      {
        id: "id",
        avatar_url: "https://avatars0.githubusercontent.com/u/1?v=4",
        html_url: "https://github.com/mojombo",
        login: "mojombo"
      },
      {
        id: "2",
        avatar_url: "https://avatars0.githubusercontent.com/u/1?v=4",
        html_url: "https://github.com/mojombo",
        login: "mokombo"
      },
      {
        id: "3",
        avatar_url: "https://avatars0.githubusercontent.com/u/2?v=4",
        html_url: "https://github.com/mojombo",
        login: "mojombo"
      }
    ]
  };
  render() {
    const { users } = this.state;
    return (
      <div style={UserStyle}>
        {users.map(user => (
          <UserItem key={user.id} user={user}></UserItem>
        ))}
      </div>
    );
  }
}
const UserStyle = {
  display: "grid",
  gridGap: "1rem",
  gridTemplateColumns: "repeat(3, 1fr)"
};
export default Users;
