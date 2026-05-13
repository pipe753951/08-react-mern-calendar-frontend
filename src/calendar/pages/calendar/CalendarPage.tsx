import { useState, type CSSProperties } from "react";

import {
  Calendar,
  Views,
  type EventPropGetter as CalendarEventPropGetter,
} from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";

import { addHours } from "date-fns";

import type { CalendarEvent } from "../../../types/interfaces/CalendarEvent";

import { calendarLocalizer } from "../../helpers/calendarLocalizer.helper";
import getCalendarMessagesLocale from "../../../locale/getCalendarMessagesLocale";

import CalendarEventBox from "../../components/calendar/CalendarEventBox";

const events: CalendarEvent[] = [
  {
    title: "Cumpleaños del lider",
    notes: "Se realizará una celebración en grupo.",
    start: new Date(),
    end: addHours(new Date(), 2),
    bgColor: "#FAFAFA",
    user: { id: "123", name: "Usuario" },
  },
];

const CalendarPage = function () {
  const [currentDate, setCurrentDate] = useState<Date>(new Date());
  const [currentView, setCurrentView] = useState<
    (typeof Views)[keyof typeof Views]
  >(Views.MONTH);

  const eventStyleGetter: CalendarEventPropGetter<CalendarEvent> = (
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
        //* Language
        culture="es"
        localizer={calendarLocalizer}
        messages={getCalendarMessagesLocale("es")}
        //* State
        date={currentDate}
        view={currentView}
        //* Calendar events & UI.
        events={events}
        components={{
          event: CalendarEventBox,
        }}
        //* Events
        // Events to handle state.
        onNavigate={setCurrentDate}
        onView={setCurrentView}
        // Events to customize UI.
        eventPropGetter={eventStyleGetter}
      />
    </>
  );
};

export default CalendarPage;
