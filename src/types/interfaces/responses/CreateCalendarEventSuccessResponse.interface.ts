import type { DatabaseCalendarEvent } from "../DatabaseCalendarEvent.interface";

export interface CreateCalendarEventSuccessResponse {
  ok: boolean;
  calendarEvent: DatabaseCalendarEvent;
}
