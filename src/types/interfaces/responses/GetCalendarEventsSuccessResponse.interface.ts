export interface GetCalendarEventsSuccessResponse {
  ok: boolean;
  calendarEvents: DatabaseCalendarEventWithUserInfo[];
}

export interface DatabaseCalendarEventWithUserInfo {
  id: string;

  title: string;
  note: string;
  start: string;
  end: string;
  user: GetCalendarEventsResponseUser;
}

export interface GetCalendarEventsResponseUser {
  _id: string;
  name: string;
}
