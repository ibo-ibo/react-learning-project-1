import React, { useState } from "react";

import Card from "../UI/Card";
import Button from "../UI/Button";
import Modal from "../UI/Modal";
import classes from "./AddUser.module.css";

export const AddUser = ({ onSubmit }) => {
  const addUserHandler = (e) => {
    e.preventDefault();
    if (!isUserAgeValid || !isUserNameValid || !userName || !userAge) {
      setIsFormValid(false);
      setIsUserAgeValid(false);
      setIsUserNameValid(false);
      setShowModal(true);
    } else {
      setUserName("");
      setUserAge("");
      setIsFormValid(true);
      setShowModal(false);
      onSubmit({ userName, userAge, id: Math.random() });
    }
  };

  const [userName, setUserName] = useState("");
  const [userAge, setUserAge] = useState("");
  const [isUserNameValid, setIsUserNameValid] = useState(true);
  const [isUserAgeValid, setIsUserAgeValid] = useState(true);
  const [isFormValid, setIsFormValid] = useState(true);
  const [showModal, setShowModal] = useState(false);

  const userNameChangeHandler = (e) => {
    const name = e.target.value;
    if (name.length < 1 || name.match(".*[0-9].*")) {
      setIsUserNameValid(false);
      setUserName(name);
    } else {
      setIsUserNameValid(true);
      setUserName(name);
    }
  };

  const userAgeChangeHandler = (e) => {
    const age = e.target.value;
    if (age < 1 || age.length < 1) {
      setIsUserAgeValid(false);
      setUserAge(age);
    } else {
      setIsUserAgeValid(true);
      setUserAge(age);
    }
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <Card className={classes.input}>
      <form onSubmit={addUserHandler}>
        <label
          className={!isUserNameValid ? classes.invalid : ""}
          htmlFor="username"
        >
          Username
        </label>
        <input
          className={!isUserNameValid ? classes.invalid : ""}
          type="text"
          id="usename"
          onChange={userNameChangeHandler}
          value={userName}
        />
        {!isUserNameValid ? (
          <p className={classes.invalid}>Please check the username</p>
        ) : null}
        <label className={!isUserAgeValid ? classes.invalid : ""} htmlFor="age">
          Age(years)
        </label>
        <input
          className={!isUserAgeValid ? classes.invalid : ""}
          type="number"
          id="age"
          onChange={userAgeChangeHandler}
          value={userAge}
        />
        {!isUserAgeValid ? (
          <p className={classes.invalid}>Please check the age</p>
        ) : null}
        <Button type="submit">Add User</Button>
        {!isFormValid ? (
          <p className={classes.invalid}>
            You can't submit the form with invalid inputs
          </p>
        ) : null}
      </form>
      {!showModal ? null : (
        <Modal
          title={"Error"}
          message={"Please check all inputs before submit"}
          modalHandler={closeModal}
        ></Modal>
      )}
    </Card>
  );
};

export default AddUser;
