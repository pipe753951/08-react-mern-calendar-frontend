import { isAxiosError } from "axios";

import useStoreSelector from "./useStoreSelector";
import useStoreDispatch from "./useStoreDispatch";

import type { User } from "../../types/interfaces/User.interface";

import type { LoginSuccessResponse } from "../../types/interfaces/responses/LoginSuccessResponse.interface";
import type { RenewJwtTokenSuccessResponse } from "../../types/interfaces/responses/RenewJwtTokenSuccessResponse.interface";

import calendarApi from "../../shared/api/calendarApi";
import authSlice from "../auth/authSlice";

interface SetAuthUserParameters {
  user: User;
  jwtToken: string;
}

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

  const _expireAuth = (errorMessage?: string) => {
    localStorage.removeItem("token");
    dispatch(authSlice.actions.setLoggedOutState(errorMessage));
  };

  const _setAuthUser = ({ user, jwtToken }: SetAuthUserParameters) => {
    localStorage.setItem("token", jwtToken);
    // TODO: Extraer fecha de inicio del token desde ahí para mayor precisión.
    // localStorage.setItem("token-init-date", Date.now().toString());

    dispatch(authSlice.actions.setLoggedInState(user));
  };

  const checkJwtAuthToken = async () => {
    const userJwtToken = localStorage.getItem("token");
    if (!userJwtToken) {
      _expireAuth();
      return;
    }

    try {
      const { data: responseData } =
        await calendarApi.post<RenewJwtTokenSuccessResponse>("/auth/renew");

      _setAuthUser({
        jwtToken: responseData.token,
        user: { name: responseData.name, uid: responseData.uid },
      });
    } catch (error) {
      _expireAuth();
      if (import.meta.env.DEV) {
        throw new Error("Error while renewing JWT token.", { cause: error });
      }
    }
  };

  const startLogin = async (
    { email, password }: StartLoginParameters,
    errorCallback?: (errorMessage: string, errorDescription?: string) => void,
  ) => {
    try {
      dispatch(authSlice.actions.setCheckingAuthState());

      const { data: responseData } =
        await calendarApi.post<LoginSuccessResponse>("/auth/login", {
          email,
          password,
        });

      _setAuthUser({
        user: {
          name: responseData.name,
          uid: responseData.uid,
        },
        jwtToken: responseData.token,
      });
    } catch (error) {
      _expireAuth("Credenciales incorrectas.");
      errorCallback?.("Hubo un error.", "Verifica tus credenciales");

      if (import.meta.env.DEV) {
        throw new Error("Something wrong happened when log in a user.", {
          cause: error,
        });
      }
    }
  };

  const startLogout = async () => {
    _expireAuth();
  };

  const startRegister = async (
    { name, email, password }: StartRegisterParameters,
    errorCallback?: (errorMessage: string, errorDescription?: string) => void,
  ) => {
    try {
      dispatch(authSlice.actions.setCheckingAuthState());

      const { data: responseData } =
        await calendarApi.post<LoginSuccessResponse>("/auth/register", {
          name,
          email,
          password,
        });

      _setAuthUser({
        user: {
          name: responseData.name,
          uid: responseData.uid,
        },
        jwtToken: responseData.token,
      });
    } catch (error) {
      let errorMessage: string;

      if (isAxiosError(error)) {
        errorMessage =
          error.response?.data.message || "Verifica tus credenciales";
      } else errorMessage = "Error desconocido.";

      _expireAuth(errorMessage);
      errorCallback?.("Hubo un error en el registro", errorMessage);

      if (import.meta.env.DEV) {
        throw new Error("Something wrong happened while registering a user", {
          cause: error,
        });
      }
    }
  };

  return {
    authStatus,
    user,
    errorMessage,

    checkJwtAuthToken,
    startLogin,
    startLogout,
    startRegister,
  };
};

export default useAuthStore;
