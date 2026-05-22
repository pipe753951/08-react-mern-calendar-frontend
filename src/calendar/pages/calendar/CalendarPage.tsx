import { useState } from "react";

import { type View as CalendarView } from "react-big-calendar";

import useCalendarStore from "../../../hooks/useCalendarStore";
import useUiStore from "../../../hooks/useUiStore";
import useValidatedCalendarView from "../../hooks/useValidatedCalendarView";

import CalendarEventModal from "../../components/calendar/CalendarEventModal";

import "react-big-calendar/lib/css/react-big-calendar.css";
import BigCalendarContainer from "../../components/calendar/BigCalendarContainer";
import type { CalendarEvent } from "../../../types/interfaces/CalendarEvent.interface";

const CalendarPage = function () {
  const { openDateModal } = useUiStore();
  const { calendarEvents } = useCalendarStore();

  const [selectedDate, setCurrentDate] = useState<Date>(new Date());

  const { calendarView, setCalendarView } = useValidatedCalendarView();

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
      <BigCalendarContainer
        //* State
        date={selectedDate}
        view={calendarView}
        //* Calendar events & UI.
        calendarEvents={calendarEvents}
        //* Events
        onDoubleClickCalendarEvent={handleCalendarEventDoubleClick}
        onSelectCalendarEvent={handleCalendarEventSelect}
        onChangeView={handleCalendarViewChange}
        // Events to handle state.
        onNavigate={setCurrentDate}
      />
      <CalendarEventModal />
    </>
  );
};

export default CalendarPage;
