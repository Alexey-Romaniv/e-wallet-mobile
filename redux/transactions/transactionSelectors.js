import {createSelector} from "@reduxjs/toolkit";

export const selectTransactions = state => state.transactions.transactions;
export const selectStatistic = state => state.transactions.statistic;
export const selectLoading = state => state.transactions.isLoading;
export const selectError  = state => state.transactions.error;

export const selectBalance = createSelector(
    [selectTransactions],
    transactions => {
        const length = transactions.length;
        return length ? transactions.reduce((acc, transaction) => acc + +(transaction.type+transaction.sum), 0).toFixed(2) : 0;
    }

)