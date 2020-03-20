import {
  SEARCH_USERS,
  CLEAR_USERS,
  SET_LOADING,
  GET_REPOS,
  GET_USER
} from "../types";

const githubReducer = (state, action) => {
  switch (action.type) {
    case GET_REPOS:
      return {
        ...state,
        repos: action.payload,
        loading: false
      };
    case CLEAR_USERS:
      return {
        ...state,
        users: []
      };
    case GET_USER:
      return {
        ...state,
        user: action.payload
      };
    case SEARCH_USERS:
      return {
        ...state,
        users: action.payload,
        loading: false
      };
    case SET_LOADING:
      return {
        ...state,
        loading: true
      };
    default:
      return state;
  }
};
export default githubReducer;
