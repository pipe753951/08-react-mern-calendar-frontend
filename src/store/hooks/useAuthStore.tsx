import useStoreSelector from "./useStoreSelector";
import useStoreDispatch from "./useStoreDispatch";

import type { LoginResponse } from "../../types/interfaces/responses/LoginResponse.interface";

import calendarApi from "../../shared/api/calendarApi";
import authSlice from "../auth/authSlice";
import { isAxiosError } from "axios";

interface StartLoginParameters {
  email: string;
  password: string;
}

interface StartRegisterParameters {
  name: string;
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

  const startRegister = async (
    { name, email, password }: StartRegisterParameters,
    errorCallback?: (errorMessage: string, errorDescription?: string) => void,
  ) => {
    console.log({ email, password });

    try {
      dispatch(authSlice.actions.setCheckingAuthState());

      const { data: responseData } = await calendarApi.post<LoginResponse>(
        "/auth/register",
        {
          name,
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
      let errorMessage: string;

      if (isAxiosError(error)) {
        errorMessage =
          error.response?.data.message || "Verifica tus credenciales";
      } else errorMessage = "Error desconocido.";

      dispatch(authSlice.actions.setLoggedOutState(errorMessage));
      errorCallback?.("Hubo un error en el registro", errorMessage);

      throw new Error("Something wrong happened", { cause: error });
    }
  };

  return {
    authStatus,
    user,
    errorMessage,

    startLogin,
    startRegister,
  };
};

export default useAuthStore;
