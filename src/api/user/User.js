import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { updateUser } from "../../app/UserSlice";
import styles from "./User.module.css";
import UserNotification from "../../components/UserNotification/UserNotification";

const User = () => {
  const { id } = useParams();
  const user = useSelector((state) =>
    state.users.users.find((user) => user.id === id)
  );
  const [formData, setFormData] = useState(user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [notification, setNotification] = useState(null);

  if (!user) return <p>Loading...</p>;

  const showNotification = (message, type) => {
    setNotification({ message, type });
    setTimeout(() => setNotification(null), 3000);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateUser(formData));
    showNotification("Patient successfully updated!", "success");
    navigate("/");
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Edit patient</h1>
      {notification && (
        <UserNotification
          message={notification.message}
          type={notification.type}
        />
      )}
      <form onSubmit={handleSubmit} className={styles.form}>
        <label className={styles.label}>
          Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className={styles.input}
          />
        </label>

        <label className={styles.label}>
          Avatar (URL):
          <input
            type="text"
            name="avatar"
            value={formData.avatar}
            onChange={handleChange}
            className={styles.input}
          />
        </label>

        <label className={styles.label}>
          Description:
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            className={styles.description}
          />
        </label>

        <label className={styles.label}>
          Website:
          <input
            type="text"
            name="website"
            value={formData.website}
            onChange={handleChange}
            className={styles.input}
          />
        </label>

        <button type="submit" className={styles.button}>
          Save Changes
        </button>
      </form>
    </div>
  );
};

export default User;
