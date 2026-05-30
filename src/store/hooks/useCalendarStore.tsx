import type { CalendarEvent } from "../../types/interfaces/CalendarEvent.interface";

import type { CreateCalendarEventSuccessResponse } from "../../types/interfaces/responses/CreateCalendarEventSuccessResponse.interface";
import type { GetCalendarEventsSuccessResponse } from "../../types/interfaces/responses/GetCalendarEventsSuccessResponse.interface";
import type { UpdateCalendarEventSuccessResponse } from "../../types/interfaces/responses/UpdateCalendarEventSuccessResponse.interface";

import useStoreDispatch from "./useStoreDispatch";
import useStoreSelector from "./useStoreSelector";

import {
  mapDbCalendarEventToCalendarEvent,
  mapGotDbCalendarEventsToCalendarEvents,
} from "../../calendar/helpers/dbCalendarEventToCalendarEvent.mapper";

import calendarSlice from "../calendar/calendarSlice";
import calendarApi from "../../shared/api/calendarApi";

const useCalendarStore = function () {
  const dispatch = useStoreDispatch();

  const { calendarEvents, selectedCalendarEvent } = useStoreSelector(
    (state) => state.calendar,
  );

  const { user } = useStoreSelector((state) => state.auth);

  const _startUploadingOfNewCalendarEvent = async (
    calendarEvent: CalendarEvent,
  ) => {
    const { data: responseData } =
      await calendarApi.post<CreateCalendarEventSuccessResponse>("/events", {
        start: calendarEvent.startDateTimestamp,
        end: calendarEvent.endDateTimestamp,
        title: calendarEvent.title,
        note: calendarEvent.note,
      });

    const mappedCalendarEvent = mapDbCalendarEventToCalendarEvent(
      responseData.calendarEvent,
      user!,
    );

    dispatch(calendarSlice.actions.insertNewEvent(mappedCalendarEvent));
  };

  const _startUploadingOfEditedCalendarEvent = async (
    calendarEvent: CalendarEvent,
    errorCallback?: (errorMessage: string, errorDescription?: string) => void,
  ) => {
    if (calendarEvent.user.uid !== user!.uid) {
      errorCallback?.(
        `No estás autorizada/o para modificar el evento "${calendarEvent.title}".`,
      );

      if (import.meta.env.PROD) return;
      throw new Error(
        `User aren't authorized to modify event "${calendarEvent.title}"`,
      );
    }

    try {
      console.debug({ calendarEvent });
      const { data: responseData } =
        await calendarApi.put<UpdateCalendarEventSuccessResponse>(
          `/events/${calendarEvent.id}`,
          {
            start: calendarEvent.startDateTimestamp,
            end: calendarEvent.endDateTimestamp,
            title: calendarEvent.title,
            note: calendarEvent.note,
          },
        );

      console.debug({ responseData });

      const mappedCalendarEvent = mapDbCalendarEventToCalendarEvent(
        responseData.calendarEvent,
        user!,
      );

      dispatch(calendarSlice.actions.updateEvent(mappedCalendarEvent));
    } catch (error) {
      throw new Error(
        "Something unexpected while uploading an edited event to backend.",
        { cause: error },
      );
    }
  };

  const selectCalendarEvent = (calendarEvent: CalendarEvent) => {
    dispatch(calendarSlice.actions.selectCalendarEvent(calendarEvent));
  };

  const selectNewCalendarEvent = () => {
    dispatch(calendarSlice.actions.selectNewCalendarEvent());
  };

  const startDeletingSelectedCalendarEvent = async () => {
    // TODO: Llegar al backend.

    //* Suponiendo que todo salió bien.

    dispatch(calendarSlice.actions.deleteEvent());
  };

  const startUploadingOfCalendarEvent = async (
    calendarEvent: CalendarEvent,
    errorCallback?: (errorMessage: string, errorDescription?: string) => void,
  ) => {
    const isCreatingCalendarEvent = calendarEvent.id === "new";

    if (isCreatingCalendarEvent) {
      _startUploadingOfNewCalendarEvent(calendarEvent);
    } else {
      _startUploadingOfEditedCalendarEvent(calendarEvent, errorCallback);
    }
  };

  const startLoadingAllCalendarEvents = async () => {
    try {
      const { data: responseData } =
        await calendarApi.get<GetCalendarEventsSuccessResponse>("/events");
      console.debug({ responseData });

      const mappedCalendarEvents = mapGotDbCalendarEventsToCalendarEvents(
        responseData.calendarEvents,
      );

      dispatch(
        calendarSlice.actions.setGotCalendarEventsToState(mappedCalendarEvents),
      );
    } catch (error) {
      if (import.meta.env.PROD) return;

      throw new Error(
        "Something was unexpected while getting all calendar events from backend",
        { cause: error },
      );
    }
  };

  return {
    calendarEvents,
    selectedCalendarEvent,

    selectCalendarEvent,
    selectNewCalendarEvent,
    startDeletingSelectedCalendarEvent,
    startUploadingOfCalendarEvent,
    startLoadingAllCalendarEvents,
  };
};

export default useCalendarStore;
