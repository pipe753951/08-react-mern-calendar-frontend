import type { CustomBigCalendarEvent } from "../../types/interfaces/CustomBigCalendarEvent.interface";
import type { CalendarEvent } from "../../types/interfaces/CalendarEvent.interface";
import { isEventAllDay } from "../helpers/calendar.helper";

const mapCustomBigCalendarEvent = function (
  calendarEvent: CalendarEvent,
): CustomBigCalendarEvent {
  const startDate = new Date(calendarEvent.startDateTimestamp);
  const endDate = new Date(calendarEvent.endDateTimestamp);

  const isAllDay = isEventAllDay(
    calendarEvent.startDateTimestamp,
    calendarEvent.endDateTimestamp,
  );

  const mappedBigCalendarEvent: CustomBigCalendarEvent = {
    title: calendarEvent.title,
    start: startDate,
    end: endDate,
    allDay: isAllDay,
    originalCalendarEvent: calendarEvent,
  };

  return mappedBigCalendarEvent;
};

const mapCustomBigCalendarEvents = function (
  calendarEvents: CalendarEvent[],
): CustomBigCalendarEvent[] {
  const mappedEvents = calendarEvents.map(mapCustomBigCalendarEvent);

  return mappedEvents;
};

export { mapCustomBigCalendarEvent, mapCustomBigCalendarEvents };
