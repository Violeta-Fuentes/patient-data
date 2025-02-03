import React from "react";
import styles from "./UserCard.module.css";

const UserCard = ({ id, avatar, name, description, onClick }) => {
  return (
    <div className={styles.cardUser} onClick={onClick}>
      <img
        className={styles.avatar}
        src={avatar}
        alt={name}
        width={60}
        height={60}
      />
      <div>
        <h4 className={styles.name} key={id}>
          {name}
        </h4>
        <h6 className={styles.name} key={id}>
          {description}
        </h6>
      </div>
    </div>
  );
};

export default UserCard;
