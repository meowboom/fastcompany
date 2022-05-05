import React from "react";
import PropTypes from "prop-types";

const Qualitie = (props) => {
  const { name, color } = props;
  return <span className={"badge m-1 bg-" + color}>{name}</span>;
};

Qualitie.propType = {
  name: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
};

export default Qualitie;
