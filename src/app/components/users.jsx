import React, { useState, useEffect } from "react";
import { paginate } from "../utils/paginate";
import Pagination from "./pagination";
import User from "./user";
import PropTypes from "prop-types";
import GroupList from "./groupList";
import api from "../api";

const Users = ({ users: allUsers, handleDelete, handleToggleBookMark }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [professions, setProfessions] = useState();
  const [selectedProf, setSelectedProf] = useState();
  const count = allUsers.length;
  const pageSize = 4;
  console.log(allUsers);
  console.log(selectedProf);

  useEffect(() => {
    api.professions.fetchAll().then((data) => setProfessions(data));
  }, []);

  const handleProfessionSelect = (item) => {
    setSelectedProf(item);
  };
  const handlePageChange = (pageIndex) => {
    setCurrentPage(pageIndex);
  };
  const filteredUsers = selectedProf
    ? allUsers.filter((user) => user.professions === selectedProf)
    : allUsers;
  const userCrop = paginate(filteredUsers, currentPage, pageSize);

  return (
    <>
      {professions && (
        <GroupList
          selectedItem={selectedProf}
          items={professions}
          onItemSelect={handleProfessionSelect}
        />
      )}
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
