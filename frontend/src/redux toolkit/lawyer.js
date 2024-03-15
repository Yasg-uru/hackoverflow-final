import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";
const initialState = {
  categories: [],
  loading: false,
  error: null,
};
export const createPost = createAsyncThunk(
  "/content/create",
  async (formdata) => {
    try {
      const res = axios.post(
        `http://localhost:4000/api/legal/create`,
        formdata,
        {
          withCredentials: true,
        }
      );
      await toast.promise(res, {
        loading: "...loading",
        success: (data) => {
          return data?.message || "created post successfully";
        },
        error: "failed to create post",
      });
      return await res.data;
    } catch (error) {
      toast.error(error?.message);
    }
  }
);
// export const
const contentSlice = createSlice({
  name: "content",
  initialState,
  reducers: {},
  extraReducers: (builder) => {},
});
export const {} = contentSlice.actions;
export default contentSlice.reducer;
