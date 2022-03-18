import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

//import * as api from "../api";
import { toast } from "react-toastify";
import axios from "axios";

export const login = createAsyncThunk(
  "auth/login",
  async (formValue, { rejectWithValue }) => {
    const { formvalue, navigate } = formValue;
    //console.log(formvalue);
    try {
      //const response = await api.signIn(formValue);
      const response = await axios.post(
        "http://localhost:5000/users/signin",
        formvalue
      );
      toast.success("Login Successful");
      navigate("/");
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);
export const signup = createAsyncThunk(
  "auth/register",
  async (formValue, { rejectWithValue }) => {
    const { formvalue, navigate } = formValue;
    //console.log(formvalue);
    try {
      //const response = await api.signIn(formValue);
      const response = await axios.post(
        "http://localhost:5000/users/signup",
        formvalue
      );
      toast.success("Register Successful");
      navigate("/");
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);
const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
    error: "",
    loading: false,
  },
  extraReducers: {
    [login.pending]: (state, action) => {
      state.loading = true;
    },
    [login.fulfilled]: (state, action) => {
      state.loading = false;
      localStorage.setItem("profile", JSON.stringify({ ...action.payload }));
      state.user = action.payload;
    },
    [login.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload.message;
    },
    [signup.pending]: (state, action) => {
      state.loading = true;
    },
    [signup.fulfilled]: (state, action) => {
      state.loading = false;
      localStorage.setItem("profile", JSON.stringify({ ...action.payload }));
      state.user = action.payload;
    },
    [signup.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload.message;
    },
  },
});

export default authSlice.reducer;
