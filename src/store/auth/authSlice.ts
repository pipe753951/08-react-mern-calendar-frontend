import { createSlice } from "@reduxjs/toolkit/react";
import type { User } from "../../types/interfaces/User.interface";
import type { AuthStatus } from "../../types/AuthStatus.types";

interface AuthSliceState {
  authStatus: AuthStatus;
  user: User | null;
  errorMessage: string | null;
}

const authSlice = createSlice({
  name: "auth",
  initialState: {
    authStatus: "not-checked",
    user: null,
    errorMessage: null,
  } as AuthSliceState,
  reducers: {
    clearErrorMessage(state) {
      state.errorMessage = null;
    },
    setCheckingAuthState(state) {
      state.authStatus = "checking";
      state.user = null;
      state.errorMessage = null;
    },
    setLoggedInState(state, { payload }: { payload: User }) {
      state.authStatus = "authenticated";
      state.user = payload;
      state.errorMessage = null;
    },
    setLoggedOutState(
      state,
      { payload: errorMessagePayload }: { payload: string | undefined },
    ) {
      state.authStatus = "not-authenticated";
      state.user = null;
      state.errorMessage = errorMessagePayload || null;
    },
  },
});

export default authSlice;
