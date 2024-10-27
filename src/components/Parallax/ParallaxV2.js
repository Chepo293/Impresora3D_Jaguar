import React from "react";
// nodejs library that concatenates classes
// nodejs library to set properties for components
import PropTypes from "prop-types";
// @material-ui/core components

// core components

export default function Parallax(props) {
  const { children, image } = props;
  return (
    <div
      style={{
        backgroundImage: "url(" + image + ")",
      }}
    >
      {children}
    </div>
  );
}

Parallax.propTypes = {
  className: PropTypes.string,
  filter: PropTypes.bool,
  children: PropTypes.node,
  style: PropTypes.string,
  image: PropTypes.string,
  small: PropTypes.bool,
};
