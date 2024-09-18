import React from "react";

const AboutLayout = ({ children }) => {
  return (
    <div>
      <nav>Vision | Mission</nav>
      <hr />
      <div>{children}</div>
    </div>
  );
};

export default AboutLayout;
