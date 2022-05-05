import React, { useState, useEffect } from "react";
import { paginate } from "../utils/paginate";
import Pagination from "./pagination";
import PropTypes from "prop-types";
import GroupList from "./groupList";
import api from "../api";
import SearchStatus from "./searchStatus";
import UserTable from "./usersTable";
import _ from "lodash";

const Users = ({ users: allUsers, handleDelete, handleToggleBookMark }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [professions, setProfessions] = useState();
  const [selectedProf, setSelectedProf] = useState();
  const [sortBy, setSortBy] = useState({ iter: "name", order: "asc" });
  const pageSize = 8;
  useEffect(() => {
    api.professions.fetchAll().then((data) => setProfessions(data));
  }, []);
  useEffect(() => {
    setCurrentPage(1);
  }, [selectedProf]);

  const handleProfessionSelect = (item) => {
    setSelectedProf(item);
  };
  const handlePageChange = (pageIndex) => {
    setCurrentPage(pageIndex);
  };
  const handleSort = (item) => {
    setSortBy(item);
  };

  const filteredUsers = selectedProf
    ? allUsers.filter(
        (user) =>
          JSON.stringify(user.profession) === JSON.stringify(selectedProf)
      )
    : allUsers;
  const count = filteredUsers.length;
  const sortedUsers = _.orderBy(filteredUsers, [sortBy.iter], [sortBy.order]);
  const userCrop = paginate(sortedUsers, currentPage, pageSize);
  const clearFilter = () => {
    setSelectedProf();
  };

  return (
    <div className="d-flex">
      {professions && (
        <div className="d-flex flex-column flex-shrink-0 p-3">
          <GroupList
            selectedItem={selectedProf}
            items={professions}
            onItemSelect={handleProfessionSelect}
          />
          <button onClick={clearFilter} className="btn btn-secondary mt-2">
            Очистить
          </button>
        </div>
      )}
      <div className="d-flex flex-column">
        <SearchStatus length={count}></SearchStatus>

        {count > 0 && (
          <UserTable
            users={userCrop}
            onSort={handleSort}
            selectedSort={sortBy}
            handleDelete={handleDelete}
            handleToggleBookMark={handleToggleBookMark}
          ></UserTable>
        )}
        <div className="d-flex justify-content-center">
          <Pagination
            itemCount={count}
            pageSize={pageSize}
            currentPage={currentPage}
            onPageChange={handlePageChange}
          ></Pagination>
        </div>
      </div>
    </div>
  );
};
Users.propTypes = {
  users: PropTypes.array.isRequired,
  handleDelete: PropTypes.func.isRequired,
  handleToggleBookMark: PropTypes.func.isRequired,
};

export default Users;
