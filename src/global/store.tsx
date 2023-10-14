import rootReducer from "./globalState";
import { configureStore } from "@reduxjs/toolkit";
import {
  FLUSH,
  REGISTER,
  REHYDRATE,
  persistReducer,
  PAUSE,
  PERSIST,
  PURGE,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

const configure = {
  key: "root",
  version: 1,
  storage,
};

const persistedReducer = persistReducer(configure, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, PAUSE, PURGE, PERSIST, REGISTER, REHYDRATE],
      },
    }),
});
