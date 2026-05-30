import type { CalendarEvent } from "../../types/interfaces/CalendarEvent.interface";
import type { User } from "../../types/interfaces/User.interface";

import type { DatabaseCalendarEvent } from "../../types/interfaces/DatabaseCalendarEvent.interface";
import type { DatabaseCalendarEventWithUserInfo } from "../../types/interfaces/responses/GetCalendarEventsSuccessResponse.interface";

const mapDbCalendarEventToCalendarEvent = (
  dbCalendarEvent: DatabaseCalendarEvent,
  userToAssign: User,
): CalendarEvent => {
  return {
    id: dbCalendarEvent.id,
    title: dbCalendarEvent.title,
    note: dbCalendarEvent.note,

    startDateTimestamp: new Date(dbCalendarEvent.start).getTime(),
    endDateTimestamp: new Date(dbCalendarEvent.end).getTime(),

    user: userToAssign!,
  };
};

const mapGotDbCalendarEventsToCalendarEvents = function (
  dbCalendarEvents: DatabaseCalendarEventWithUserInfo[],
): CalendarEvent[] {
  const mappedCalendarEvents: CalendarEvent[] = dbCalendarEvents.map(
    (dbCalendarEvent) => {
      const mappedCalendarEvent: CalendarEvent = {
        id: dbCalendarEvent.id,
        title: dbCalendarEvent.title,
        note: dbCalendarEvent.note,

        endDateTimestamp: new Date(dbCalendarEvent.end).getTime(),
        startDateTimestamp: new Date(dbCalendarEvent.start).getTime(),

        user: {
          name: dbCalendarEvent.user.name,
          uid: dbCalendarEvent.user._id,
        },
      };
      return mappedCalendarEvent;
    },
  );
  return mappedCalendarEvents;
};

export {
  mapDbCalendarEventToCalendarEvent,
  mapGotDbCalendarEventsToCalendarEvents,
};
