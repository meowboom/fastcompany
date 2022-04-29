import React from "react";
import Qualitie from "./qualitie";
import BookMark from "./bookmark";

const User = (props) => {
  const {
    _id,
    name,
    profession,
    completedMeetings,
    rate,
    qualities,
    handleDelete,
    handleToggleBookMark,
    ...rest
  } = props;
  return (
    <tr key={_id} id={_id}>
      <th>{name}</th>
      <td>
        {qualities.map((qulity) => (
          <Qualitie key={qulity._id} {...qulity} />
        ))}
      </td>

      <td id={profession._id}>{profession.name}</td>
      <td>{completedMeetings}</td>
      <td>{rate}/5</td>
      <td>
        <BookMark
          {...rest}
          id={_id}
          handleToggleBookMark={handleToggleBookMark}
        ></BookMark>
      </td>
      <td>
        <button
          type="button"
          className="btn btn-danger"
          onClick={() => handleDelete(_id)}
        >
          Delete
        </button>
      </td>
    </tr>
  );
};

export default User;
