import React from "react";
// import Qualitie from "./qualitie";
// import BookMark

const User = (users, handleDelete) => {
  console.log(handleDelete);
  return (
    <>
      {users.users.map((user) => {
        return (
          <tr key={user._id} id={user._id}>
            <th>{user.name}</th>
            <td>
              {user.qualities.map((item) => {
                return (
                  <span className={"badge m-1 bg-" + item.color} key={item._id}>
                    {item.name}
                  </span>
                );
              })}
            </td>
            <td id={user.profession._id}>{user.profession.name}</td>
            <td>{user.completedMeetings}</td>
            <td>{user.rate}/5</td>
            <td>
              <button
                type="button"
                className="btn btn-danger"
                onClick={() => console.log(`delete`)}
              >
                Delete
              </button>
            </td>
          </tr>
        );
      })}
    </>
  );
};

export default User;
