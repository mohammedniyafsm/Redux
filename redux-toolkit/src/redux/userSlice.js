import { createAsyncThunk, createSlice, nanoid } from "@reduxjs/toolkit";

// 🔹 Add User (POST)
export const addUserAsync = createAsyncThunk(
  "user/addUserAsync",
  async (payload) => {
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });
      return response.json();
    } catch (error) {
      console.log(error);
    }
  }
);

// 🔹 Get Users (GET)
export const getUserAsync = createAsyncThunk("user/getUserAsync", async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    return response.json();
  } catch (error) {
    console.log(error);
  }
});

// 🔹 Delete User (DELETE)
export const deleteUserAsync = createAsyncThunk(
  "user/deleteUserAsync",
  async (id) => {
    try {
      await fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });
      return id; // return the id for filtering
    } catch (error) {
      console.log(error);
    }
  }
);

export const userSlice = createSlice({
  name: "user",
  initialState: [],
  reducers: {
    addUser: (state, action) => {
      const user = {
        id: nanoid(),
        name: action.payload.name,
      };
      state.push(user);
    },
    deleteUser: (state, action) => {
      return state.filter((s) => s.id !== action.payload.id);
    },
  },
  extraReducers: (builder) => {
    // ✅ Add user async
    builder.addCase(addUserAsync.fulfilled, (state, action) => {
      const newUser = { ...action.payload, id: nanoid() }; // always generate unique id
      state.push(newUser);
    });

    // ✅ Get users async (replace state, don’t merge)
    builder.addCase(getUserAsync.fulfilled, (state, action) => {
      return action.payload.map((user) => ({
        ...user,
        id: user.id.toString(), // normalize ID to string
      }));
    });

    // ✅ Delete user async
    builder.addCase(deleteUserAsync.fulfilled, (state, action) => {
      return state.filter((s) => s.id !== action.payload.toString());
    });
  },
});

export const { addUser, deleteUser } = userSlice.actions;
export default userSlice.reducer;
