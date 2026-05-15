import AppRouter from "./router/app.router";

import { Toaster } from "sonner";

const CalendarApp = function () {
  return (
    <>
      <Toaster richColors />
      <AppRouter />
    </>
  );
};

export default CalendarApp;
