import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const API_URL = "https://63bedcf7f5cfc0949b634fc8.mockapi.io/users";

// Show all users
export const fetchUsers = createAsyncThunk("users/fetchUsers", async () => {
  const response = await fetch(API_URL);
  return await response.json();
});

//Update an user
export const updateUser = createAsyncThunk("users/updateUser", async (user) => {
  const response = await fetch(`${API_URL}/${user.id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(user),
  });
  return await response.json();
});

// Add new user
export const addUser = createAsyncThunk("users/addUser", async (user) => {
  const response = await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(user),
  });
  return await response.json();
});

const userSlice = createSlice({
  name: "users",
  initialState: { users: [], status: "idle", error: null },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.users = action.payload;
        state.status = "succeeded";
      })
      .addCase(updateUser.fulfilled, (state, action) => {
        const index = state.users.findIndex(
          (user) => user.id === action.payload.id
        );
        if (index !== -1) state.users[index] = action.payload;
      })
      .addCase(addUser.fulfilled, (state, action) => {
        state.users.push(action.payload);
      });
  },
});

export default userSlice.reducer;
