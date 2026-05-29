import { useState } from "react";

import { type View as CalendarView } from "react-big-calendar";

import type { CalendarEvent } from "../../../../types/interfaces/CalendarEvent.interface";

import useCalendarStore from "../../../../store/hooks/useCalendarStore";
import useUiStore from "../../../../store/hooks/useUiStore";
import useValidatedCalendarView from "../../../hooks/useValidatedCalendarView";

import BigCalendarContainer from "../../../components/calendar/BigCalendarContainer";

const CalendarPageMainContent = function () {
  const { openDateModal } = useUiStore();
  const { calendarEvents, selectCalendarEvent } = useCalendarStore();

  const [selectedDate, setCurrentDate] = useState<Date>(new Date());

  const { calendarView, setCalendarView } = useValidatedCalendarView();

  const handleCalendarEventDoubleClick = () => {
    openDateModal();
  };

  const handleCalendarEventSelect = (calendarEvent: CalendarEvent) => {
    selectCalendarEvent(calendarEvent);
  };

  const handleCalendarViewChange = (view: CalendarView) => {
    setCalendarView(view);
  };

  return (
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
  );
};

export default CalendarPageMainContent;
