import React from "react";

import Card from "../UI/Card";

import classes from "./UsersList.module.css";

export const UsersList = ({ users, handleDeleteUser }) => {
  return (
    <div className={classes.users}>
      <ul>
        {users.length < 1 ? (
          <Card>
            <li>No Users</li>
          </Card>
        ) : (
          users.map((user) => {
            return (
              <Card key={user.id}>
                <li>
                  <h2>{user.userName}</h2>
                  <div>
                    <p>({user.userAge}) Years old</p>
                  </div>
                </li>
              </Card>
            );
          })
        )}
      </ul>
    </div>
  );
};

export default UsersList;
