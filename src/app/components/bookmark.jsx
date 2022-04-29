import React from "react";
import PropTypes from "prop-types";

const BookMark = ({ bookmark, handleToggleBookMark, id }) => {
  return (
    <button onClick={() => handleToggleBookMark(id)}>
      <i className={"bi bi-bookmark" + (bookmark ? "-check-fill" : "")}></i>
    </button>
  );
};
BookMark.propTypes = {
  bookmark: PropTypes.bool.isRequired,
  handleToggleBookMark: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
};

export default BookMark;
