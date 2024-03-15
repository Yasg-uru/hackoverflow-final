// import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import axios from "axios";
// import toast from "react-hot-toast";
// const initialState = {
//   lawyerdata: [],
// };
// export const applyforbecomelawyerr = createAsyncThunk(
//   "/lawyer/apply",
//   async (data) => {
//     try {
//       const formdata = new FormData();
//       formdata.append("documents", data);
//       const res = axios.post(
//         `http://localhost:4000/api/lawyer/apply`,
//         formdata,
//         {
//           withCredentials: true,
//         }
//       );
//       await toast.promise(res, {
//         loading: "...loading",
//         success: (data) => {
//           return data?.message || "your application created successfully";
//         },
//         error: "failed to apply ",
//       });
//       return (await res).data;
//     } catch (error) {
//       toast.error(error?.message);
//     }
//   }
// );
// export const getlawyers = createAsyncThunk("/lawyer/getlawyer", async () => {
//   try {
//     const res = await axios.get(`http://localhost:4000/api/lawyer/getlawyer`, {
//       withCredentials: true,
//     });
//     toast.success("fetched data successfully");
//     console.log("this is res.data "+res.data.lawyerApplications)
//     return res.data;
//   } catch (error) {
//     toast.error(error?.message);
//   }
// });
// const lawyerSlice = createSlice({
//   name: "lawyer",
//   initialState,
//   reducers: {},
//   extraReducers: (builder) => {
//     builder.addCase(getlawyers.fulfilled, (state, action) => {
//       state.lawyerdata = action?.payload?.lawyerApplications;
//     });
//   },
// });

// export const {} = lawyerSlice.actions;
// export default lawyerSlice.reducer;
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import toast from "react-hot-toast";

const initialState = {
  lawyerdata: [],
};

export const applyforbecomelawyerr = createAsyncThunk(
  "/lawyer/apply",
  async (data) => {
    try {
      const formdata = new FormData();
      formdata.append("documents", data);
      const res = await axios.post(
        `http://localhost:4000/api/lawyer/apply`,
        formdata,
        {
          withCredentials: true,
        }
      );
      await toast.promise(res, {
        loading: "...loading",
        success: (data) => {
          return data?.message || "Your application created successfully";
        },
        error: "Failed to apply ",
      });
      return res.data; // Return the response data
    } catch (error) {
      toast.error(error?.message);
      throw error; // Re-throw the error for proper handling
    }
  }
);

export const getlawyers = createAsyncThunk("/lawyer/getlawyer", async () => {
  try {
    const res = axios.get(`http://localhost:4000/api/lawyer/getlawyer`, {
      withCredentials: true,
    });
    await toast.promise(res, {
      loading: "...loading",
      success: (data) => {
        return data?.message || "fetched successfully";
      },
      error: "error in fetching data",
    });
    // toast.success("Fetched data successfully");
    return (await res).data; // Return the response data
  } catch (error) {
    toast.error(error?.message);
    throw error; // Re-throw the error for proper handling
  }
});
export const approvestatus = createAsyncThunk("/lawyer/approve", async (id) => {
  try {
    const res = axios.post(`http://localhost:4000/api/lawyer/approve/${id}`,{},{
      withCredentials:true
    });
    await toast.promise(res, {
      loading: "...loading",
      success: (data) => {
        return data?.message || "approved successfully";
      },
      error: "failed to update status",
    });
    return (await res).data;
  } catch (error) {
    toast.error(error?.message);
  }
});
export const rejectstatus = createAsyncThunk("/lawyer/reject", async (id) => {
  try {
    const res = axios.post(
      `http://localhost:4000/api/lawyer/reject/${id}`,
      {},
      {
        withCredentials: true,
      }
    );
    await toast.promise(res, {
      loading: "...loading",
      success: (data) => {
        return data?.message || "status updated successfully";
      },
      error: "failed to update status",
    });
  } catch (error) {
    toast.error(error?.message);
  }
});

const lawyerSlice = createSlice({
  name: "lawyer",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getlawyers.fulfilled, (state, action) => {
      state.lawyerdata = action.payload?.data?.lawyerApplications; // Access correct data field
    });
  },
});

export default lawyerSlice.reducer;
