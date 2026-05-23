import { createSlice } from "@reduxjs/toolkit/react";

import { addHours } from "date-fns";

import type { CalendarEvent } from "../../types/interfaces/CalendarEvent.interface";

interface CalendarSliceState {
  calendarEvents: CalendarEvent[];
  selectedCalendarEvent: CalendarEvent | null;
}

const tempEvent: CalendarEvent = {
  id: Date.now().toString(),
  title: "Cumpleaños del lider",
  note: "Se realizará una celebración en grupo.",
  startDateTimestamp: Date.now(),
  endDateTimestamp: addHours(new Date(), 2).getTime(),
  bgColor: "#ffffff",
  user: { id: "123", name: "Usuario" },
};

const calendarSlice = createSlice({
  name: "calendar",
  initialState: {
    calendarEvents: [tempEvent] as CalendarEvent[],
    selectedCalendarEvent: null,
  } as CalendarSliceState,
  reducers: {
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
        user: { id: "123", name: "Usuario" },
      };
    },
    updateEvent(state, { payload }: { payload: CalendarEvent }) {
      state.calendarEvents = state.calendarEvents.map((calendarEvent) => {
        if (calendarEvent.id === payload.id) return payload;
        return calendarEvent;
      });
    },
  },
});

export default calendarSlice;
