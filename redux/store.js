import { configureStore } from "@reduxjs/toolkit";

import { authPersistReducer } from "./auth/authSlice";
import {transactionsReducer} from "./transactions/transactionsSlice";
import {currencyPersistReducer} from "./currency/currencySlice";

import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";

export const store = configureStore({
  reducer: {
    auth: authPersistReducer,
    transactions: transactionsReducer,
    currency: currencyPersistReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
