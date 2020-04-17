import React, { Fragment, useEffect } from "react";

const About = () => {
  useEffect(() => {
    setTimeout(() => {
      $(p)[0].fadeOut();
    }, 2000);
  }, []);
  return (
    <Fragment>
      <h1>About this app</h1>
      <p>An app to search GitHub users...</p>
      <p>Version: 1.1.0</p>
    </Fragment>
  );
};

export default About;
