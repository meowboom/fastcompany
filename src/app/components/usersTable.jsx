import React from "react";
import PropTypes from "prop-types";
import User from "./user";
import TableHeader from "./tableHeader";
const UserTable = ({
  users,
  onSort,
  selectedSort,
  handleDelete,
  handleToggleBookMark,
}) => {
  const columns = {
    name: { iter: "name", name: "Имя" },
    qualities: { name: "Качества" },
    profession: { iter: "profession.name", name: "Профессия" },
    completedMeetings: { iter: "completedMeetings", name: "Встретился, раз" },
    rate: { iter: "rate", name: "Оценка" },
    bookmark: { iter: "bookmark", name: "Избранное" },
    buttonDelete: { name: "Удалить гостя" },
  };
  return (
    <table className="table table-striped">
      <TableHeader {...{ onSort, selectedSort, columns }} />
      <tbody className="table-content">
        {users.map((user) => (
          <User
            key={user._id}
            {...user}
            handleDelete={handleDelete}
            handleToggleBookMark={handleToggleBookMark}
          />
        ))}
      </tbody>
    </table>
  );
};

UserTable.propTypes = {
  users: PropTypes.array.isRequired,
  handleDelete: PropTypes.func.isRequired,
  handleToggleBookMark: PropTypes.func.isRequired,
  onSort: PropTypes.func.isRequired,
  selectedSort: PropTypes.object.isRequired,
};

export default UserTable;
