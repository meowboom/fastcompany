import React, { useState } from "react";
import { paginate } from "../utils/paginate";
import Pagination from "./pagination";
import User from "./user";
import PropTypes from "prop-types";

const Users = ({ users, handleDelete, handleToggleBookMark }) => {
  const count = users.length;
  const pageSize = 4;
  const [currentPage, setCurrentPage] = useState(1);
  const handlePageChange = (pageIndex) => {
    setCurrentPage(pageIndex);
  };
  const userCrop = paginate(users, currentPage, pageSize);
  return (
    <>
      {count > 0 && (
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
            {userCrop.map((user) => (
              <User
                key={user._id}
                {...user}
                handleDelete={handleDelete}
                handleToggleBookMark={handleToggleBookMark}
              />
            ))}
          </tbody>
        </table>
      )}
      <Pagination
        itemCount={count}
        pageSize={pageSize}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      ></Pagination>
    </>
  );
};
Users.protoTypes = {
  users: PropTypes.array.isRequired,
  handleDelete: PropTypes.func.isRequired,
  handleToggleBookMark: PropTypes.func.isRequired,
};

export default Users;
