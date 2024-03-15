import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import toast from "react-hot-toast";
const initialState = {
  isLoggedIn: localStorage.getItem("isLoggedIn") || false,
  role: localStorage.getItem("role") || "",
  userdata:  JSON.parse(localStorage.getItem("userdata")) || {}  ,
  users: [],
};
export const registeruser = createAsyncThunk(
  "/auth/register",
  async (formdata) => {
    try {
      const res = await axios.post(
        `http://localhost:4000/api/user/register`,
        formdata,
        {
          withCredentials: true,
        }
      );
      toast.success("Account created successfully");

      return res.data;
    } catch (error) {
      toast.error(error?.message || "failed to create account ");
    }
  }
);
export const login = createAsyncThunk("/auth/login", async (formdata) => {
  try {
    const res = await axios.post(
      `http://localhost:4000/api/user/login`,
      formdata,
      {
        withCredentials: true,
      }
    );
    toast.success("Logged in  successfully");

    return res.data;
  } catch (error) {
    toast.error(error?.message || "failed to create account ");
  }
});
export const logout = createAsyncThunk("/auth/logout", async () => {
  try {
    const res = await axios.post(
      `http://localhost:4000/api/user/logout`,
      {},
      {
        withcredentials: true,
      }
    );
    toast.success("logged out successfully");
    return res.data;
  } catch (error) {
    toast.error(error?.message || "failed to logout ");
  }
});
export const updatepassword = createAsyncThunk(
  "/auth/updatepassword",
  async (formdata) => {
    try {
      const res = await axios.put(
        `http://localhost:4000/api/user/updatepassword`,
        formdata,
        {
          withcredentials: true,
        }
      );
      toast.success("your password updated successfully");
      return res.data;
    } catch (error) {
      toast.error(error?.message || "failed to update password");
    }
  }
);
export const getalluser = createAsyncThunk("/auth/getalluser", async () => {
  try {
    const res = await axios.get(`http://localhost:4000/api/user/getalluser`, {
      withcredentials: true,
    });
    toast.success("fetched data successfully");
    return res.data;
  } catch (error) {
    toast.error(error?.message || "failed to fetch users");
  }
});
export const getsingleuser = createAsyncThunk(
  "/auth/getsingleuser",
  async (id) => {
    try {
      const res = await axios.get(
        `http://localhost:4000/api/user/getsingleuser/${id}`,
        {
          withcredentials: true,
        }
      );
      toast.success("fetched user successfully");
      return res.data;
    } catch (error) {
      toast.error(error?.message || "failed to fetch user");
    }
  }
);
export const me = createAsyncThunk("/auth/me", async () => {
  try {
    const res = await axios.get(`http://localhost:4000/api/user/me`, {
      withcredentials: true,
    });
    toast.success("fetched your data successfully");
    return res.data;
  } catch (error) {
    toast.error(error?.message || "failed to fetch your data");
  }
});
export const updateprofile = createAsyncThunk(
  "/auth/updateprofile",
  async () => {
    try {
      const res = await axios.get(
        `http://localhost:4000/api/user/updateprofile`,
        {
          withcredentials: true,
        }
      );
      toast.success("fetched your data successfully");
      return res.data;
    } catch (error) {
      toast.error(error?.message || "failed to fetch your data");
    }
  }
);
export const changerole = createAsyncThunk(
  "/auth/changerole",
  async (formdata) => {
    try {
      const res = await axios.put(
        `http://localhost:4000/api/user/updaterole/${formdata.id}`,
        { formdata },
        {
          withcredentials: true,
        }
      );
      toast.success("fetched your data successfully");
      return res.data;
    } catch (error) {
      toast.error(error?.message || "failed to fetch your data");
    }
  }
);
export const deleteuser = createAsyncThunk("/auth/deleteuser", async (id) => {
  try {
    const res = await axios.delete(
      `http://localhost:4000/api/user/updaterole/${id}`,
      {
        withcredentials: true,
      }
    );
    toast.success("fetched your data successfully");
    return res.data;
  } catch (error) {
    toast.error(error?.message || "failed to fetch your data");
  }
});

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(registeruser.fulfilled, (state, action) => {
        localStorage.setItem("isLoggedIn", true);
        localStorage.setItem("userdata", JSON.stringify(action?.payload?.user));
        localStorage.setItem("role", action?.payload?.user?.role);
        state.isLoggedIn = true;
        state.role = action?.payload?.role;
        state.userdata = action?.payload?.user;
      })
      .addCase(login.fulfilled, (state, action) => {
        localStorage.setItem("isLoggedIn", true);
        localStorage.setItem("userdata", JSON.stringify(action?.payload?.user));
        localStorage.setItem("role", action?.payload?.user?.role);
        state.isLoggedIn = true;
        state.role = action?.payload?.role;
        state.userdata = action?.payload?.user;
      })
      .addCase(logout.fulfilled, (state, action) => {
        localStorage.removeItem("isLoggedIn");
        localStorage.removeItem("role");
        localStorage.removeItem("userdata");
        state.isLoggedIn = false;
        state.role = "";
        state.userdata = {};
      });
  },
});
export const {} = authSlice.actions;
export default authSlice.reducer;
