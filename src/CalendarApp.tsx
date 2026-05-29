import { Provider } from "react-redux";
import AppRouter from "./router/app.router";

import { Toaster } from "sonner";
import store from "./store/store";

import useAuthStore from "./store/hooks/useAuthStore";

import SplashScreen from "./shared/components/SplashScreen";

const CalendarAppUi = function () {
  const { authStatus, checkJwtAuthToken } = useAuthStore();

  if (authStatus === "not-checked") {
    checkJwtAuthToken();
  }

  if (authStatus === "not-checked" || authStatus === "checking") {
    return <SplashScreen />;
  }

  return (
    <Provider store={store}>
      <AppRouter />
    </Provider>
  );
};

const CalendarApp = function () {
  return (
    <Provider store={store}>
      <Toaster richColors />
      <CalendarAppUi />
    </Provider>
  );
};

export default CalendarApp;
