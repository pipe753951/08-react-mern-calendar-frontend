import { createSlice } from "@reduxjs/toolkit/react";

import { addHours } from "date-fns";

import type { CalendarEvent } from "../../types/interfaces/CalendarEvent.interface";

const tempEvent: CalendarEvent = {
  id: Date.now().toString(),
  title: "Cumpleaños del lider",
  note: "Se realizará una celebración en grupo.",
  startDateTimestamp: Date.now(),
  endDateTimestamp: addHours(new Date(), 2).getTime(),
  bgColor: "#FAFAFA",
  user: { id: "123", name: "Usuario" },
};

const calendarSlice = createSlice({
  name: "calendar",
  initialState: {
    calendarEvents: [tempEvent] as CalendarEvent[],
    activeEvent: null,
  },
  reducers: {},
});

export default calendarSlice;
