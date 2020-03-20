import React, { useEffect, Fragment, useContext } from "react";
import { Link } from "react-router-dom";
import Spinner from "../layout/Spinner";
import Repos from "./Repos/Repos";
import GithubContext from "../../context/github/github";

const User = ({ match }) => {
  const { GetUser, GetUserRepos, user, loading, repos } = useContext(
    GithubContext
  );
  useEffect(() => {
    GetUser(match.params.login);
    GetUserRepos(match.params.login);
    // eslint-disable-next-line
  }, []);

  const {
    login,
    company,
    blog,
    name,
    avatar_url,
    location,
    bio,
    html_url,
    followers,
    following,
    public_repos,
    public_gists,
    hireable
  } = user;
  if (loading) {
    return (
      <Fragment>
        <Spinner />
      </Fragment>
    );
  } else {
    return (
      <Fragment>
        <Link className="btn btn-light" to={"/"}>
          Back to Search
        </Link>
        Hireable:{" "}
        {hireable ? (
          <i className="fas fa-check text-success" />
        ) : (
          <i className="fas fa-times-circle text-danger" />
        )}
        <div className="card grid-2">
          <div>
            <div className="all-center">
              <img
                className="round-img"
                src={avatar_url}
                alt="not"
                style={{ width: "160px" }}
              />
              <h1>{name}</h1>
              <p>
                {location && (
                  <Fragment>
                    <strong>Location:</strong> {location}
                  </Fragment>
                )}
              </p>
            </div>
          </div>
          <div>
            {bio && (
              <Fragment>
                <h3>Bio:</h3>
                {bio}
              </Fragment>
            )}
            <br />
            <a className="btn btn-dark my-1" href={html_url}>
              Visit GitHub Profile
            </a>
            <ul>
              <li>
                {login && (
                  <Fragment>
                    <strong>Username:</strong> {login}
                  </Fragment>
                )}
              </li>
              <li>
                {company && (
                  <Fragment>
                    <strong>Company:</strong> {company}
                  </Fragment>
                )}
              </li>
              <li>
                {" "}
                {blog && (
                  <Fragment>
                    <strong>Website:</strong> {blog}
                  </Fragment>
                )}
              </li>
              <li></li>
            </ul>
          </div>
        </div>
        <div className="card text-center">
          <div className="badge badge-primary">Followers: {followers}</div>
          <div className="badge badge-success">Following: {following}</div>
          <div className="badge badge-info">Public Repos: {public_repos}</div>
          <div className="badge badge-dark">Public Gists: {public_gists}</div>
        </div>
        <h2 className="text-center">Repositories</h2>
        <Repos repos={repos} />
      </Fragment>
    );
  }
};
export default User;
