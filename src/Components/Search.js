import React, { useState, useContext } from "react";
import GithubContext from "../context/github/github";
import AlertContext from "../context/alert/AlertContext";
const Search = () => {
  const { SearchUsers, ClearUsers, users } = useContext(GithubContext);
  const { SetAlert } = useContext(AlertContext);
  const ShowClear = users.length > 0 ? true : false;
  const [text, setText] = useState("");
  const onChange = e => {
    setText(e.target.value);
  };
  const onSubmit = e => {
    e.preventDefault();
    if (text.length > 0) {
      SearchUsers(text);
    } else {
      SetAlert("Please enter something", "light");
    }
    setText("");
  };

  return (
    <div>
      <form className="form" onSubmit={onSubmit}>
        <input
          type="text"
          name="text"
          placeholder="Search Users..."
          value={text}
          onChange={onChange}
          autoComplete="off"
        />
        <input type="Submit" name="Submit" className="btn btn-dark btn-block" />
      </form>
      {ShowClear && (
        <button className="btn btn-light btn-block" onClick={ClearUsers}>
          Clear Users
        </button>
      )}
    </div>
  );
};
export default Search;
