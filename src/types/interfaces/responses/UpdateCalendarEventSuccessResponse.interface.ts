import type { DatabaseCalendarEvent } from "../DatabaseCalendarEvent.interface";

export interface UpdateCalendarEventSuccessResponse {
  ok: boolean;
  calendarEvent: DatabaseCalendarEvent;
}
