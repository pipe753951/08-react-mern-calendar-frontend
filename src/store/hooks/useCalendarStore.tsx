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

  const startUploadingOfCalendarEvent = async (
    calendarEvent: CalendarEvent,
  ) => {
    // TODO: Llegar al backend.

    //* Suponiendo que todo salió bien.
    const isCreatingCalendarEvent = calendarEvent.id === "new";

    if (isCreatingCalendarEvent) {
      dispatch(
        calendarSlice.actions.insertNewEvent({
          ...calendarEvent,
          id: Date.now().toString(),
        }),
      );
      return;
    }

    dispatch(calendarSlice.actions.updateEvent(calendarEvent));
  };

  const startDeletingEvent = async () => {
    // TODO: Llegar al backend.

    //* Suponiendo que todo salió bien.

    dispatch(calendarSlice.actions.deleteEvent());
  };

  return {
    calendarEvents,
    selectedCalendarEvent,

    selectCalendarEvent,
    selectNewCalendarEvent,
    startUploadingOfCalendarEvent,
    startDeletingEvent,
  };
};

export default useCalendarStore;
