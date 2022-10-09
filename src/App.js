import React, { useState } from "react";

import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList";
import Modal from "./components/UI/Modal";

function App() {
  const [users, setUsers] = useState([]);
  const addUser = (userObj) => {
    setUsers((list) => [...list, userObj]);
  };

  return (
    <div>
      <AddUser onSubmit={addUser} />
      <UsersList users={users} />
    </div>
  );
}

export default App;
