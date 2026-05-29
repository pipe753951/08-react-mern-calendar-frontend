export interface GetCalendarEventsSuccessResponse {
  ok: boolean;
  calendarEvents: DatabaseCalendarEventsWithUserInfo[];
}

export interface DatabaseCalendarEventsWithUserInfo {
  title: string;
  note: string;
  start: string;
  end: string;
  user: GetCalendarEventsResponseUser;
  id: string;
}

export interface GetCalendarEventsResponseUser {
  _id: string;
  name: string;
}
