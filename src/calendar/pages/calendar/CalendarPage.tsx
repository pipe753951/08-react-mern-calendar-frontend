import { useState } from "react";

import { type View as CalendarView } from "react-big-calendar";

import useCalendarStore from "../../../store/hooks/useCalendarStore";
import useUiStore from "../../../store/hooks/useUiStore";
import useValidatedCalendarView from "../../hooks/useValidatedCalendarView";

import CalendarEventModal from "../../components/calendar/CalendarEventModal";

import "react-big-calendar/lib/css/react-big-calendar.css";
import BigCalendarContainer from "../../components/calendar/BigCalendarContainer";
import type { CalendarEvent } from "../../../types/interfaces/CalendarEvent.interface";

const CalendarPage = function () {
  const { openDateModal } = useUiStore();
  const { calendarEvents, selectCalendarEvent } = useCalendarStore();

  const [selectedDate, setCurrentDate] = useState<Date>(new Date());

  const { calendarView, setCalendarView } = useValidatedCalendarView();

  const handleCalendarEventDoubleClick = (calendarEvent: CalendarEvent) => {
    console.log({ doubleClickEvent: calendarEvent });
    openDateModal();
  };

  const handleCalendarEventSelect = (calendarEvent: CalendarEvent) => {
    console.log({ selectEvent: calendarEvent });
    selectCalendarEvent(calendarEvent);
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
