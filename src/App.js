import AddUser from "./api/addUser/AddUser";
import User from "./api/user/User";
import Users from "./api/users/Users";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import styles from "./App.module.css";

function App() {
  return (
    <div className={styles.background}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Users />}></Route>
          <Route path="/user/:id" element={<User />} />
          <Route path="/add" element={<AddUser />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
