import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
import Toast from 'react-native-toast-message';

axios.defaults.baseURL = "https://e-wallet-backend.onrender.com";
//axios.defaults.baseURL = "http://localhost:3000";

const token = {
    set(token) {
        axios.defaults.headers.common.Authorization = `Bearer ${token}`;
    },
    unset() {
        axios.defaults.headers.common.Authorization = "";
    },
};

export const registration = createAsyncThunk(
    "auth/registerUser",
    async (userData, {rejectWithValue}) => {
        try {
            const response = await axios.post("/users/register", userData);
            const {data} = response
            token.set(data.token);
            return data;
        } catch (e) {
            Toast.show({
                type:"error",
                text1:e.response.data.message
            })
            return rejectWithValue(e.response.data.message); // Возвращаем данные ошибки, полученные от сервера
        }
    }
);

export const login = createAsyncThunk(
    "auth/loginUser",
    async (userData, {rejectWithValue}) => {
        try {
            const response = await axios.post("/users/login", userData);
            const {data} = response;
            console.log(data.token)
            token.set(data.token);
            return data;
        } catch (e) {
            Toast.show({
                type:"error",
                text1:e.response.data.message
            });
            return rejectWithValue(e.response.data.message); // Возвращаем данные ошибки, полученные от сервера        }
        }
    }
);

export const logout = createAsyncThunk(
    "auth/logoutUser",
    async (_, {rejectWithValue}) => {
        try {
            await axios.post("/users/logout");
            token.unset();
        } catch (e) {
            Toast.show({
                type:"error",
                text1:e.response.data.message
            })
            return rejectWithValue(e.response.data.message); // Возвращаем данные ошибки, полученные от сервера        }
        }
    }
);

export const fetchCurrentUser = createAsyncThunk(
    "auth/refreshUser",
    async (_, {rejectWithValue, getState}) => {
        const tokenFromStorage = getState().auth.token;

        if (!tokenFromStorage) {
            return rejectWithValue("");
        }
        token.set(tokenFromStorage);
        try {
            const response = await axios("/users/current");
            return response.data;
        } catch (e) {
            Toast.show({
                type:"error",
                text1:e.response.data.message
            })
            return rejectWithValue(e.response.data.message);
        }

    }
);
