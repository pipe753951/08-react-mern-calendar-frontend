import type { User } from "./User.interface";

export interface CalendarEvent {
  id: string;

  bgColor: string;
  endDateTimestamp: number;
  note: string;
  startDateTimestamp: number;
  title: string;
  user: User;
}
