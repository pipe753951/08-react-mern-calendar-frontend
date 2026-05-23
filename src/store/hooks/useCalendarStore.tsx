import type { CalendarEvent } from "../../types/interfaces/CalendarEvent.interface";

import useStoreDispatch from "./useStoreDispatch";
import useStoreSelector from "./useStoreSelector";

import calendarSlice from "../calendar/calendarSlice";

const useCalendarStore = function () {
  const dispatch = useStoreDispatch();

  const { calendarEvents, selectedCalendarEvent } = useStoreSelector(
    (state) => state.calendar,
  );

  const selectCalendarEvent = (calendarEvent: CalendarEvent) => {
    dispatch(calendarSlice.actions.selectCalendarEvent(calendarEvent));
  };

  const selectNewCalendarEvent = () => {
    dispatch(calendarSlice.actions.selectNewCalendarEvent());
  };

  return {
    calendarEvents,
    selectedCalendarEvent,
    selectCalendarEvent,
    selectNewCalendarEvent,
  };
};

export default useCalendarStore;
