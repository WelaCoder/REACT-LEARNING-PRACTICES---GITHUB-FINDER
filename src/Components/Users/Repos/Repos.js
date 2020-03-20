import React from "react";
import RepoItem from "./RepoItem";
import PropTypes from "prop-types";
const Repos = ({ repos }) => {
  return (
    <div className="grid-2">
      {repos.map(repo => (
        <RepoItem repo={repo} key={repo.id}></RepoItem>
      ))}
    </div>
  );
};
Repos.propTypes = {
  repos: PropTypes.array.isRequired
};
export default Repos;
