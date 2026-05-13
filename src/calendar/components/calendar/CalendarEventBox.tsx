import type { CalendarEvent } from "../../../types/interfaces/CalendarEvent";

interface CalendarEventBoxProps {
  event: CalendarEvent;
}

const CalendarEventBox = function ({ event }: CalendarEventBoxProps) {
  console.log({ event });
  return (
    <>
      <strong>{event.title}</strong>
      <span>&nbsp;- {event.user.name}</span>
    </>
  );
};

export default CalendarEventBox;
