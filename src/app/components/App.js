import React, { useState, useEffect } from "react";
import Users from "./users";
import api from "../api";

function App() {
  const [users, setUsers] = useState();
  useEffect(() => {
    api.users.fetchAll().then((user) => setUsers(user));
  }, []);
  const handleDelete = (userId) => {
    setUsers(users.filter((user) => user._id !== userId));
  };
  const handleToggleBookMark = (id) => {
    setUsers(
      users.map((user) => {
        if (user._id === id) {
          return { ...user, bookmark: !user.bookmark };
        }
        return user;
      })
    );
  };

  if (!users) {
    return (
      <div className="text-center">
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  } else {
    return (
      <Users
        users={users}
        handleDelete={handleDelete}
        handleToggleBookMark={handleToggleBookMark}
      ></Users>
    );
  }
}

export default App;
