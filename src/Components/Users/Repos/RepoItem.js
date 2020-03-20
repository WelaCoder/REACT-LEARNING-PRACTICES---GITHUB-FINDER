import React from "react";
import PropTypes from "prop-types";
const RepoItem = ({ repo }) => {
  return (
    <div className="card text-center">
      <h3 className="text-primary">{repo.name}</h3>
      <p>{repo.description}</p>
      <br />
      <a className="btn btn-secondary" href={repo.html_url}>
        More
      </a>
    </div>
  );
};
RepoItem.propTypes = {
  repo: PropTypes.object.isRequired
};
export default RepoItem;
