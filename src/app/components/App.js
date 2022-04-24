import React, { useState } from "react";
import Users from "./users";
import SearchStatus from "./searchStatus";
import api from "../api";

function App() {
  const [users, setUsers] = useState(api.users.fetchAll());
  let { user } = users;
  const handleDelete = (userId) => {
    setUsers(users.filter((user) => user._id !== userId));
  };
  const handleToggleBookMark = (id) => {};
  return (
    <div>
      <SearchStatus users={users}></SearchStatus>
      <Users users={users} handleDelete={handleDelete}></Users>
    </div>
  );
}

export default App;
