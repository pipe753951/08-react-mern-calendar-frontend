import type { CSSProperties } from "react";

import { Calendar, type Event, type EventPropGetter } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";

import { calendarLocalizer } from "../../helpers/calendarLocalizer.helper";

import { addHours } from "date-fns";
import getCalendarMessagesLocale from "../../../locale/getCalendarMessagesLocale";

interface AppEvent extends Event {
  notes: string;
  bgColor: string;
}

const events: AppEvent[] = [
  {
    title: "Cumpleaños del lider",
    notes: "Se realizará una celebración en grupo.",
    start: new Date(),
    end: addHours(new Date(), 2),
    bgColor: "#FAFAFA",
  },
];

const CalendarPage = function () {
  const eventStyleGetter: EventPropGetter<AppEvent> = (
    event,
    start,
    end,
    isSelected,
  ) => {
    console.debug({ event, start, end, isSelected });

    const style: CSSProperties = {
      backgroundColor: "#347CF7",
      color: "white",
      borderRadius: "none",
      opacity: 0.8,
    };

    return { style };
  };

  return (
    <>
      <Calendar
        culture="es"
        localizer={calendarLocalizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        className="h-100 p-4"
        messages={getCalendarMessagesLocale("es")}
        eventPropGetter={eventStyleGetter}
      />
    </>
  );
};

export default CalendarPage;
