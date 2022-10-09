import React from "react";

import classes from "./Modal.module.css";
import Button from "../UI/Button";
import Card from "./Card";

export const Modal = ({ message, title, modalHandler }) => {
  return (
    <div className={classes.backdrop} onClick={modalHandler}>
      <Card>
        <div className={classes.modal}>
          <header className={classes.header}>
            <h2>{title}</h2>
          </header>
          <div className={classes.content}>{message}</div>
          <div className={classes.actions}>
            <Button onClick={modalHandler}>Close</Button>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Modal;
