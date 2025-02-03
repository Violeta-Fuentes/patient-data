import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { fetchUsers } from "../../app/UserSlice";
import styles from "./Users.module.css";
import UserCard from "../../components/userCard/UserCard";
import UserModal from "../../components/userModal/UserModal";

const Users = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users.users);
  const navigate = useNavigate();
  const [selectedUser, setSelectedUser] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  const openModal = (user) => {
    setSelectedUser(user);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedUser(null);
  };

  return (
    <div>
      <button className={styles.button} onClick={() => navigate("/add")}>
        Add Patient
      </button>
      <h1 className={styles.title}>Patients</h1>
      <ul className={styles.list}>
        {users.map((user) => (
          <UserCard
            id={user.id}
            avatar={user.avatar}
            name={user.name}
            description={user.description}
            onClick={() => openModal(user)}
          />
        ))}
      </ul>
      <UserModal
        isOpen={isModalOpen}
        onClose={closeModal}
        user={selectedUser}
      />
    </div>
  );
};

export default Users;
