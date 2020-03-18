import React from "react";
import PropTypes from "prop-types";
const Navbar = ({ title, icon }) => {
  return (
    <div>
      <div className="navbar bg-primary">
        <h1>
          <i className={icon} />
          {title}
        </h1>
      </div>
    </div>
  );
};

Navbar.defaultProps = {
  title: "GitHub Finder",
  icon: "fab fa-github"
};
Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired
};

export default Navbar;
