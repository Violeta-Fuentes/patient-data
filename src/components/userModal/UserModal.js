import React, { useState } from "react";
import Modal from "react-modal";
import styles from "./UserModal.module.css";
import { useNavigate } from "react-router-dom";

Modal.setAppElement("#root");

const UserModal = ({ isOpen, onClose, user }) => {
  const [expanded, setExpanded] = useState(false);
  const navigate = useNavigate();

  if (!user) return null;

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      style={{
        content: {
          maxWidth: "400px",
          margin: "auto",
          padding: "20px",
          borderRadius: "10px",
          maxHeight: expanded ? "500px" : "300px",
          transition: "max-height 0.3s ease-in-out",
        },
        overlay: { backgroundColor: "rgba(0, 0, 0, 0.5)" },
      }}
    >
      <div className={styles.name}>
        <img src={user.avatar} alt={user.name} className={styles.avatar} />
        <h2>{user.name}</h2>
        <p>
          {expanded ? user.description : `${user.description.slice(0, 50)}...`}
        </p>

        {expanded && (
          <p>
            <strong>Website:</strong>
            <a
              className={styles.web}
              href={user.website}
              target="_blank"
              rel="noopener noreferrer"
            >
              {user.website}
            </a>
          </p>
        )}

        <button
          className={styles.expandable}
          onClick={() => setExpanded(!expanded)}
        >
          {expanded ? "Show less" : "Read more"}
        </button>
        <button onClick={onClose} className={styles.close}>
          Close
        </button>
      </div>
      <button
        onClick={() => navigate(`/user/${user.id}`)}
        className={styles.edit}
      >
        Edit
      </button>
    </Modal>
  );
};

export default UserModal;
