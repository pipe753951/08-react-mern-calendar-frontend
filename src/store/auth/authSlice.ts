import { createSlice } from "@reduxjs/toolkit/react";
import type { User } from "../../types/interfaces/User.interface";

interface AuthSliceState {
  authStatus: "checking" | "authenticated" | "not-authenticated";
  user: User | undefined;
  errorMessage: string | null;
}

const authSlice = createSlice({
  name: "auth",
  initialState: {
    authStatus: "checking",
    user: undefined,
    errorMessage: null,
  } as AuthSliceState,
  reducers: {
    checkAuth(state) {
      state.authStatus = "checking";
      state.user = undefined;
      state.errorMessage = null;
    },
    login(state, { payload }: { payload: User }) {
      state.authStatus = "authenticated";
      state.user = payload;
      state.errorMessage = null;
    },
  },
});

export default authSlice;
