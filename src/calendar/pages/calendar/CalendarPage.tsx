import { useState, type CSSProperties } from "react";

import {
  Calendar,
  Views,
  type Event as CalendarEvent,
  type EventPropGetter as CalendarEventPropGetter,
} from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";

import { addHours } from "date-fns";

import { calendarLocalizer } from "../../helpers/calendarLocalizer.helper";
import getCalendarMessagesLocale from "../../../locale/getCalendarMessagesLocale";

interface AppEvent extends CalendarEvent {
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
  const [currentDate, setCurrentDate] = useState<Date>(new Date());
  const [currentView, setCurrentView] = useState<
    (typeof Views)[keyof typeof Views]
  >(Views.MONTH);

  const eventStyleGetter: CalendarEventPropGetter<AppEvent> = (
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
        className="h-100 p-4"
        culture="es"
        localizer={calendarLocalizer}
        messages={getCalendarMessagesLocale("es")}
        startAccessor="start"
        endAccessor="end"
        date={currentDate}
        view={currentView}
        onNavigate={setCurrentDate}
        onView={setCurrentView}
        events={events}
        eventPropGetter={eventStyleGetter}
      />
    </>
  );
};

export default CalendarPage;
