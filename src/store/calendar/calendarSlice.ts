import { createSlice } from "@reduxjs/toolkit/react";

import { addHours } from "date-fns";

import type { CalendarEvent } from "../../types/interfaces/CalendarEvent.interface";

interface CalendarSliceState {
  calendarEvents: CalendarEvent[];
  isLoadingCalendarEvents: boolean;
  selectedCalendarEvent: CalendarEvent | null;
}

// const tempEvent: CalendarEvent = {
//   id: Date.now().toString(),
//   title: "Cumpleaños del lider",
//   note: "Se realizará una celebración en grupo.",
//   startDateTimestamp: Date.now(),
//   endDateTimestamp: addHours(new Date(), 2).getTime(),
//   bgColor: "#ffffff",
//   user: { uid: "123", name: "Usuario" },
// };

const calendarSlice = createSlice({
  name: "calendar",
  initialState: {
    // La asignación de tipo ya no es necesaria.
    // calendarEvents: [tempEvent] as CalendarEvent[],
    calendarEvents: [],
    isLoadingCalendarEvents: false,
    selectedCalendarEvent: null,
  } as CalendarSliceState,
  reducers: {
    //* Calendar event loader handlers.
    setGotCalendarEventsToState(
      state,
      { payload }: { payload: CalendarEvent[] },
    ) {
      state.isLoadingCalendarEvents = false;
      state.calendarEvents = payload;
    },

    setIsLoadingCalendarEvents(state, { payload }: { payload: boolean }) {
      state.isLoadingCalendarEvents = payload;
    },

    //* CRUD
    insertNewEvent(state, { payload }: { payload: CalendarEvent }) {
      state.calendarEvents.push(payload);
    },
    selectCalendarEvent(state, { payload }: { payload: CalendarEvent }) {
      state.selectedCalendarEvent = payload;
    },
    selectNewCalendarEvent(state) {
      state.selectedCalendarEvent = {
        id: "new",
        title: "",
        note: "",
        startDateTimestamp: Date.now(),
        endDateTimestamp: addHours(new Date(), 2).getTime(),
        bgColor: "#ffffff",
        user: { uid: "123", name: "Usuario" },
      };
    },
    updateEvent(state, { payload }: { payload: CalendarEvent }) {
      state.calendarEvents = state.calendarEvents.map((calendarEvent) => {
        if (calendarEvent.id === payload.id) return payload;
        return calendarEvent;
      });
    },
    deleteEvent(state) {
      if (state.calendarEvents.length && state.selectedCalendarEvent) {
        state.calendarEvents = state.calendarEvents.filter((calendarEvent) => {
          return calendarEvent.id !== state.selectedCalendarEvent!.id;
        });

        state.selectedCalendarEvent = null;
      }
    },
  },
});

export default calendarSlice;
