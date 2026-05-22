import type { Event as ReactCalendarEvent } from "react-big-calendar";

import type { CalendarEvent } from "./CalendarEvent.interface";

export interface CustomBigCalendarEvent extends ReactCalendarEvent {
  originalCalendarEvent: CalendarEvent;
}
