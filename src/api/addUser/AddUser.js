import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addUser } from "../../app/UserSlice";
import styles from "./AddUser.module.css";
import UserNotification from "../../components/UserNotification/UserNotification";

const AddUser = () => {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    website: "",
    avatar: "",
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [errors, setErrors] = useState({});
  const [notification, setNotification] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const validateForm = () => {
    let newErrors = {};
    if (!formData.name.trim()) newErrors.name = "The name is required";
    if (!formData.avatar.trim())
      newErrors.avatar = "The patient image is required";
    if (!formData.description.trim())
      newErrors.description = "The description is required";
    if (!formData.website.trim()) newErrors.website = "The website is required";
    else if (!/^https?:\/\/[^\s$.?#].[^\s]*$/.test(formData.website))
      newErrors.website = "URL invalid";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const showNotification = (message, type) => {
    setNotification({ message, type });
    setTimeout(() => setNotification(null), 3000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      dispatch(addUser(formData));
      showNotification("Patient successfully created!", "success");
      navigate("/");
    } else {
      showNotification("There was an error creating the patient", "error");
    }
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Add patient</h1>
      {notification && (
        <UserNotification
          message={notification.message}
          type={notification.type}
        />
      )}
      <form onSubmit={handleSubmit} className={styles.form}>
        <label className={styles.label}>
          Name:
          {errors.name && <span className={styles.errors}>{errors.name}</span>}
          <input
            type="text"
            name="name"
            onChange={handleChange}
            className={styles.input}
          />
        </label>

        <label className={styles.label}>
          Avatar (URL):
          {errors.avatar && (
            <span className={styles.errors}>{errors.avatar}</span>
          )}
          <input
            type="text"
            name="avatar"
            onChange={handleChange}
            className={styles.input}
          />
        </label>

        <label className={styles.label}>
          Description:
          {errors.description && (
            <span className={styles.errors}>{errors.description}</span>
          )}
          <textarea
            name="description"
            onChange={handleChange}
            className={styles.description}
          />
        </label>

        <label className={styles.label}>
          Website:
          {errors.website && (
            <span className={styles.errors}>{errors.website}</span>
          )}
          <input
            type="text"
            name="website"
            onChange={handleChange}
            className={styles.input}
          />
        </label>

        <button type="submit" className={styles.button}>
          Save User
        </button>
      </form>
    </div>
  );
};

export default AddUser;
