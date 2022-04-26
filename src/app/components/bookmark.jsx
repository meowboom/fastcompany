import React from "react";

const BookMark = ({ bookmark, handleToggleBookMark, id }) => {
  return (
    <button onClick={() => handleToggleBookMark(id)}>
      <i className={"bi bi-bookmark" + (bookmark ? "-check-fill" : "")}></i>
    </button>
  );
};

export default BookMark;
