import type { CalendarEvent } from "../types/interfaces/CalendarEvent.interface";

import useStoreDispatch from "./useStoreDispatch";
import useStoreSelector from "./useStoreSelector";

import calendarSlice from "../store/calendar/calendarSlice";

const useCalendarStore = function () {
  const dispatch = useStoreDispatch();

  const { calendarEvents, selectedCalendarEvent } = useStoreSelector(
    (state) => state.calendar,
  );

  const selectCalendarEvent = (calendarEvent: CalendarEvent) => {
    dispatch(calendarSlice.actions.selectCalendarEvent(calendarEvent));
  };

  return { calendarEvents, selectedCalendarEvent, selectCalendarEvent };
};

export default useCalendarStore;
