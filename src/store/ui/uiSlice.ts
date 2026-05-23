import { createSlice } from "@reduxjs/toolkit/react";

const uiSlice = createSlice({
  name: "ui",
  initialState: {
    isDateModalOpen: false,
  },
  reducers: {
    openDateModal(state) {
      state.isDateModalOpen = true;
    },
    closeDateModal(state) {
      state.isDateModalOpen = false;
    },
  },
});

export default uiSlice;
