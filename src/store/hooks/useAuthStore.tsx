import useStoreSelector from "./useStoreSelector";
// import useStoreDispatch from "./useStoreDispatch";

import calendarApi from "../../shared/api/calendarApi";

interface StartLoginParameters {
  email: string;
  password: string;
}

const useAuthStore = function () {
  const { authStatus, user, errorMessage } = useStoreSelector(
    (state) => state.auth,
  );
  // const dispatch = useStoreDispatch();

  const startLogin = async ({ email, password }: StartLoginParameters) => {
    console.log({ email, password });

    try {
      const response = await calendarApi.post("/auth/login", {
        email,
        password,
      });
      console.debug(response);
    } catch (error) {
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
