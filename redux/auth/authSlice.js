import { createSlice } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  registration,
  login,
  logout,
  fetchCurrentUser,
} from "./authOperations";

const initialState = {
  user: {
    name: "",
    email: "",
    avatarUrl: "",
    wallet: 0,
  },
  token: null,
  isLoading: false,
  error: null,
  isFetching: false,
  isAuth: false,
};

const authPersistConfig = {
  key: "token",
  storage: AsyncStorage,
  whitelist: ["token"],
};

export const handlePending = (state) => {
  state.isLoading = true;
  state.error = null;
  console.log(state.error);
  console.log("111")
};

export const handleRejected = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  extraReducers: (builder) =>
    builder
      .addCase(registration.pending, handlePending)
      .addCase(login.pending, handlePending)
      .addCase(logout.pending, handlePending)
      .addCase(registration.rejected, (state, {payload}) => {
        state.isLoading = false;
        state.error = payload;
      })
      .addCase(login.rejected, handleRejected)
      .addCase(logout.rejected, handleRejected)
      .addCase(registration.fulfilled, (state, { payload }) => {
        state.user = payload.user;
        state.token = payload.token;
        state.isAuth = true;

        state.isLoading = false;
      })
      .addCase(login.fulfilled, (state, { payload }) => {
        state.user = payload.user;
        state.token = payload.token;
        state.isAuth = true;

        state.isLoading = false;
      })
      .addCase(logout.fulfilled, (state) => {
        state.token = "";
        state.isAuth = false;
        state.isLoading = false;
        state.user = {
          name: "",
          email: "",
          avatarUrl: "",
          wallet: 0
        };
      })
      .addCase(fetchCurrentUser.pending, (state) => {
        state.isFetching = true;
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchCurrentUser.fulfilled, (state, { payload }) => {
        state.user = payload;
        state.isAuth = true;

        state.isLoading = false;
        state.isFetching = false;
      })
      .addCase(fetchCurrentUser.rejected, (state, { payload }) => {
        state.error = payload;
        state.isFetching = false;
        state.isAuth = false;
        state.isLoading = false;
      }),
});

export const authPersistReducer = persistReducer(
  authPersistConfig,
  authSlice.reducer
);
