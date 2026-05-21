import { Provider } from "react-redux";
import AppRouter from "./router/app.router";

import { Toaster } from "sonner";
import store from "./store/store";

const CalendarApp = function () {
  return (
    <Provider store={store}>
      <Toaster richColors />
      <AppRouter />
    </Provider>
  );
};

export default CalendarApp;
