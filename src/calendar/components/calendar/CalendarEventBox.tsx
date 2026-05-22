import type { CustomBigCalendarEvent } from "../../../types/interfaces/CustomBigCalendarEvent.interface";

interface CalendarEventBoxProps {
  event: CustomBigCalendarEvent;
}

const CalendarEventBox = function ({
  event: calendarEvent,
}: CalendarEventBoxProps) {
  return (
    <>
      <strong>{calendarEvent.title}</strong>
      <span>&nbsp;- {calendarEvent.originalCalendarEvent.user.name}</span>
    </>
  );
};

export default CalendarEventBox;
