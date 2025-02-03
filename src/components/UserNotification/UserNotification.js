import React from "react";
import styles from "./UserNotification.module.css";

const UserNotification = ({ message, type }) => {
  return (
    <div
      className={
        type === "success"
          ? styles.notificationSuccess
          : styles.notificationError
      }
    >
      {message}
    </div>
  );
};

export default UserNotification;
