import { configureStore } from "@reduxjs/toolkit/react";

import authSlice from "./auth/authSlice";
import calendarSlice from "./calendar/calendarSlice";
import uiSlice from "./ui/uiSlice";

const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    calendar: calendarSlice.reducer,
    ui: uiSlice.reducer,
  },
  /**
   * Es innecesario, porque el problema del uso del objeto Date, que
   * causa el problema de "serializableCheck", fue resuelto. Esto se
   * logró diseñando una interfaz independiente de
   * "react-big-calendar", llamada "CalendarEvent", que ahora está
   * siendo utilizada en casi toda la aplicación, mientras que la
   * interfaz propia del paquete se encuentra mapeada y con el
   * evento "CalendarEvent" adjunto para utilizar el paquete sin
   * problemas.
   * El problema fue solucionado a favor de este sitio web:
   * https://redux.js.org/faq/organizing-state#can-i-put-functions-promises-or-other-non-serializable-items-in-my-store-state
   */
  // middleware(getDefaultMiddleware) {
  //   return getDefaultMiddleware({
  //     serializableCheck: false
  //   });
  // },
});

export type StoreRootState = ReturnType<typeof store.getState>;
export type StoreAppDispatch = typeof store.dispatch;

export default store;
