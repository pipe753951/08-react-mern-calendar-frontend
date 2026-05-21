import { configureStore } from "@reduxjs/toolkit/react";

import uiSlice from "./ui/uiSlice";

const store = configureStore({
  reducer: {
    ui: uiSlice.reducer,
  },
});

export default store;
