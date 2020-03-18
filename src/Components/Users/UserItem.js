import React from "react";
import PropTypes from "prop-types";

const UserItem = ({ user: { avatar_url, html_url, login } }) => {
  return (
    <div className="card text-center">
      <img
        className="round-img"
        src={avatar_url}
        alt="ima"
        style={{ width: "60px" }}
      />
      <p>{login}</p>
      <a href={html_url} className="btn btn-sm btn-dark">
        More
      </a>
    </div>
  );
};

UserItem.prototypes = {
  user: PropTypes.object.isRequired
};
export default UserItem;
