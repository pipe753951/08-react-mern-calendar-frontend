import useStoreSelector from "./useStoreSelector";
import useStoreDispatch from "./useStoreDispatch";

import type { LoginResponse } from "../../types/interfaces/responses/LoginResponse.interface";

import calendarApi from "../../shared/api/calendarApi";
import authSlice from "../auth/authSlice";

interface StartLoginParameters {
  email: string;
  password: string;
}

const useAuthStore = function () {
  const { authStatus, user, errorMessage } = useStoreSelector(
    (state) => state.auth,
  );
  const dispatch = useStoreDispatch();

  const startLogin = async (
    { email, password }: StartLoginParameters,
    errorCallback?: (errorMessage: string, errorDescription?: string) => void,
  ) => {
    console.log({ email, password });

    try {
      dispatch(authSlice.actions.setCheckingAuthState());

      const { data: responseData } = await calendarApi.post<LoginResponse>(
        "/auth/login",
        {
          email,
          password,
        },
      );

      localStorage.setItem("token", responseData.token);
      // TODO: Extraer fecha de inicio del token desde ahí para mayor precisión.
      // localStorage.setItem("token-init-date", Date.now().toString());

      dispatch(
        authSlice.actions.setLoggedInState({
          name: responseData.name,
          uid: responseData.uid,
        }),
      );
    } catch (error) {
      dispatch(
        authSlice.actions.setLoggedOutState("Credenciales incorrectas."),
      );
      errorCallback?.("Hubo un error.", "Verifica tus credenciales");

      throw new Error("Something wrong happened", { cause: error });
    }
  };

  return {
    authStatus,
    user,
    errorMessage,

    startLogin,
  };
};

export default useAuthStore;
