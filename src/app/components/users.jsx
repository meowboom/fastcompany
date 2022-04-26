import React from "react";
import Pagination from "./pagination";
import User from "./user";

const Users = ({ users, handleDelete, handleToggleBookMark, ...rest }) => {
  return (
    <>
      {users.length > 0 && (
        <table className="table table-striped">
          <thead>
            <tr className="table-title">
              <th scope="col">Имя</th>
              <th scope="col">Качества</th>
              <th scope="col">Профессия</th>
              <th scope="col">Встретился, раз</th>
              <th scope="col">Оценка</th>
              <th scope="col">Избранное</th>
              <th scope="col">Удалить гостя</th>
            </tr>
          </thead>
          <tbody className="table-content">
            {users.map((user) => (
              <User
                key={user._id}
                {...user}
                handleDelete={handleDelete}
                handleToggleBookMark={handleToggleBookMark}
                // {...rest}
              />
            ))}
          </tbody>
        </table>
      )}
      <Pagination></Pagination>
    </>
  );
};

export default Users;
