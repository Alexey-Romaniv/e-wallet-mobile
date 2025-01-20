import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
import Toast from "react-native-toast-message";

export const fetchTransactions = createAsyncThunk(
    "transactions/fetchAll",
    async (_, {rejectedWithValue}) => {
        try {
            const {data} = await axios.get("/transactions");
            const sortedTransactions = data.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

            return sortedTransactions;
        } catch (e) {
            rejectedWithValue(e.message);
        }
    }
);
export const fetchStatistic = createAsyncThunk(
    "transactions/fetchStatistic",
    async (date, {rejectedWithValue}) => {
        try {
            const response = await axios.get(`/transactions/filtered?month=${date?.selectedMonth || ''}&year=${date?.selectedYear || ''}`);
            const {data} = response;

            return data;
        } catch (e) {
            Toast.show({
                type:"error",
                text1:e.response.data.message
            });
            rejectedWithValue(e.response.data.message);
        }
    }
);

export const addTransaction = createAsyncThunk(
    "transactions/add",
    async (transactionData, {rejectedWithValue}) => {
        try {
            console.log(transactionData)
            const response = await axios.post("/transactions", transactionData);
            const {data} = response;
            // transactions - массив транзакций, полученный с сервера

            return data;
        } catch (e) {
            Toast.show({
                type:"error",
                text1:e.response.data.message
            });
            rejectedWithValue(e.response.data.message);
        }
    }
);

export const deleteTransaction = createAsyncThunk(
    "transactions/delete",
    async (transactionId, {rejectedWithValue}) => {
        try {
            const response = axios.delete(`/transactions/${transactionId}`)
            const {data} = response;
            return data;
        } catch (e) {
            Toast.show({
                type:"error",
                text1:e.response.data.message
            });
            rejectedWithValue(e.response.data.message);
        }
    }
)
