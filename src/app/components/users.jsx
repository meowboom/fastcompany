import React from "react";
import User from "./user";

const Users = ({ users, handleDelete }) => {
  console.log(handleDelete);

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
              <th scope="col">Удалить гостя</th>
            </tr>
          </thead>
          <tbody className="table-content">
            <User users={users} handleDelete={handleDelete}></User>
          </tbody>
        </table>
      )}
    </>
  );
};

export default Users;
