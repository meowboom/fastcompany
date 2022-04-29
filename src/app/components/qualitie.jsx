import React from "react";
import PropTypes from "prop-types";

const Qualitie = (props) => {
  const { _id, name, color } = props;
  return (
    <span className={"badge m-1 bg-" + color} key={_id}>
      {name}
    </span>
  );
};

Qualitie.protoType = {
  _id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
};

export default Qualitie;
