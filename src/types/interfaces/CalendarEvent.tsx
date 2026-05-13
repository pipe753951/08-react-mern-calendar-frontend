import type { Event as ReactCalendarEvent } from "react-big-calendar";

import type { User } from "./User";

export interface CalendarEvent extends ReactCalendarEvent {
  bgColor: string;
  notes: string;
  user: User;
}
