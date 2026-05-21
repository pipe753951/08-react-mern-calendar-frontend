import { configureStore } from "@reduxjs/toolkit/react";

import uiSlice from "./ui/uiSlice";

const store = configureStore({
  reducer: {
    ui: uiSlice.reducer,
  },
});

export type StoreRootState = ReturnType<typeof store.getState>;
export type StoreAppDispatch = typeof store.dispatch;

export default store;
