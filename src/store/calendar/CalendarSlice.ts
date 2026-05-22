import { createSlice } from "@reduxjs/toolkit/react";

import { addHours } from "date-fns";

import type { CalendarEvent } from "../../types/interfaces/CalendarEvent";

const tempEvent: CalendarEvent = {
  title: "Cumpleaños del lider",
  notes: "Se realizará una celebración en grupo.",
  start: new Date(),
  end: addHours(new Date(), 2),
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
