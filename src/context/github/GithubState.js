import React, { useReducer } from "react";
import axios from "axios";
import GithubContext from "./github";
import GithubReducer from "./githubReducer";
import {
  SEARCH_USERS,
  CLEAR_USERS,
  SET_LOADING,
  GET_REPOS,
  GET_USER
} from "../types";
let githubClient;
let githubSecret;
if (process.env.NODE_ENV !== "production") {
  githubClient = process.env.REACT_APP_CLIENT_ID;
  githubSecret = process.env.REACT_APP_CLIENT_SECRET;
} else {
  githubClient = process.env.CLIENT_ID;
  githubSecret = process.env.CLIENT_SECRET;
}
const GithubState = props => {
  const initialState = {
    users: [],
    user: {},
    repos: [],
    loading: false
  };
  const [state, dispatch] = useReducer(GithubReducer, initialState);

  const SearchUsers = async text => {
    dispatch({
      type: SET_LOADING
    });
    const res = await axios.get(
      `https://api.github.com/search/users?q=${text}&client_id=${githubClient}&client_secret=${githubSecret}`
    );
    dispatch({
      type: SEARCH_USERS,
      payload: res.data.items
    });
  };

  const GetUser = async username => {
    dispatch({
      type: SET_LOADING
    });
    const res = await axios.get(
      `https://api.github.com/users/${username}?client_id=${githubClient}&client_secret=${githubSecret}`
    );
    dispatch({
      type: GET_USER,
      payload: res.data
    });
  };

  const ClearUsers = () =>
    dispatch({
      type: CLEAR_USERS
    });

  const GetUserRepos = async username => {
    SetLoading();
    const res = await axios.get(
      `https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&client_id=${githubClient}&client_secret=${githubSecret}`
    );
    dispatch({
      type: GET_REPOS,
      payload: res.data
    });
  };
  const SetLoading = () => {
    dispatch({
      type: SET_LOADING
    });
  };
  return (
    <GithubContext.Provider
      value={{
        users: state.users,
        user: state.user,
        repos: state.repos,
        loading: state.loading,
        SearchUsers,
        GetUser,
        ClearUsers,
        GetUserRepos
      }}
    >
      {props.children}
    </GithubContext.Provider>
  );
};
export default GithubState;
