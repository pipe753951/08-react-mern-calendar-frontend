import { useState, type CSSProperties } from "react";

import {
  Calendar,
  type EventPropGetter as CalendarEventPropGetter,
  type View as CalendarView,
} from "react-big-calendar";

import type { CalendarEvent } from "../../../types/interfaces/CalendarEvent";

import { calendarLocalizer } from "../../helpers/calendarLocalizer.helper";
import getCalendarMessagesLocale from "../../../locale/getCalendarMessagesLocale";

import useCalendarStore from "../../../hooks/useCalendarStore";
import useUiStore from "../../../hooks/useUiStore";
import useValidatedCalendarView from "../../hooks/useValidatedCalendarView";

import CalendarEventBox from "../../components/calendar/CalendarEventBox";
import CalendarEventModal from "../../components/calendar/CalendarEventModal";

import "react-big-calendar/lib/css/react-big-calendar.css";

const CalendarPage = function () {
  const { openDateModal } = useUiStore();
  const { calendarEvents } = useCalendarStore();

  const [selectedDate, setCurrentDate] = useState<Date>(new Date());

  const { calendarView, setCalendarView } = useValidatedCalendarView();

  // const [currentView, setCurrentView] = useState<CalendarView>(
  //   (view as CalendarView) || "week",
  // );

  // const eventStyleGetter: CalendarEventPropGetter<CalendarEvent> = (
  //   event,
  //   start,
  //   end,
  //   isSelected,
  // ) => {/* ... */}

  const eventStyleGetter: CalendarEventPropGetter<CalendarEvent> = () => {
    const style: CSSProperties = {
      backgroundColor: "#347CF7",
      color: "white",
      borderRadius: "none",
      opacity: 0.8,
    };

    return { style };
  };

  const handleCalendarEventDoubleClick = (event: CalendarEvent) => {
    console.log({ doubleClickEvent: event });
    openDateModal();
  };

  const handleCalendarEventSelect = (event: CalendarEvent) => {
    console.log({ selectEvent: event });
  };

  const handleCalendarViewChange = (view: CalendarView) => {
    console.log({ view });

    setCalendarView(view);
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
        date={selectedDate}
        view={calendarView}
        //* Calendar events & UI.
        events={calendarEvents}
        components={{
          event: CalendarEventBox,
        }}
        //* Events
        onDoubleClickEvent={handleCalendarEventDoubleClick}
        onSelectEvent={handleCalendarEventSelect}
        onView={handleCalendarViewChange}
        // Events to handle state.
        onNavigate={setCurrentDate}
        // Events to customize UI.
        eventPropGetter={eventStyleGetter}
      />
      <CalendarEventModal />
    </>
  );
};

export default CalendarPage;
