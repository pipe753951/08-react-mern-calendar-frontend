import type { CSSProperties, SyntheticEvent } from "react";

import {
  Calendar,
  type EventPropGetter as CalendarEventPropGetter,
  type NavigateAction,
  type View as BigCalendarView,
} from "react-big-calendar";

import type { CustomBigCalendarEvent } from "../../../types/interfaces/CustomBigCalendarEvent.interface";
import type { CalendarEvent } from "../../../types/interfaces/CalendarEvent.interface";

import useAuthStore from "../../../store/hooks/useAuthStore";

import { calendarLocalizer } from "../../helpers/calendarLocalizer.helper";
import { mapCustomBigCalendarEvents } from "../../mappers/customBigCalendarEvent.mapper";
import getCalendarMessagesLocale from "../../../locale/getCalendarMessagesLocale";

import CalendarEventBox from "./CalendarEventBox";

interface BigCalendarContainerProps {
  calendarEvents: CalendarEvent[];
  date: Date;
  view: BigCalendarView;

  onChangeView(view: BigCalendarView): void;
  onDoubleClickCalendarEvent(
    calendarEvent: CalendarEvent,
    event: SyntheticEvent<HTMLElement>,
  ): void;
  onNavigate(
    newDate: Date,
    view: BigCalendarView,
    action: NavigateAction,
  ): void;
  onSelectCalendarEvent(
    calendarEvent: CalendarEvent,
    event: SyntheticEvent<HTMLElement>,
  ): void;
}

const BigCalendarContainer = function (props: BigCalendarContainerProps) {
  const {
    calendarEvents,
    date,
    view,

    onChangeView,
    onDoubleClickCalendarEvent,
    onNavigate,
    onSelectCalendarEvent,
  } = props;

  const { user } = useAuthStore();

  const mappedCustomBigCalendarEvents =
    mapCustomBigCalendarEvents(calendarEvents);

  const handleViewChange = onChangeView;
  const handleNavigate = onNavigate;

  const handleDoubleClick = (
    bigCalendarEvent: CustomBigCalendarEvent,
    event: SyntheticEvent<HTMLElement>,
  ) => {
    return onDoubleClickCalendarEvent(
      bigCalendarEvent.originalCalendarEvent,
      event,
    );
  };
  const handleSelectCalendarEvent = (
    bigCalendarEvent: CustomBigCalendarEvent,
    event: SyntheticEvent<HTMLElement>,
  ) => {
    return onSelectCalendarEvent(bigCalendarEvent.originalCalendarEvent, event);
  };

  // const eventStyleGetter: CalendarEventPropGetter<CalendarEvent> = (
  //   event,
  //   start,
  //   end,
  //   isSelected,
  // ) => {/* ... */}

  const eventStyleGetter: CalendarEventPropGetter<CustomBigCalendarEvent> = (
    event,
  ) => {
    const style: CSSProperties = {
      backgroundColor:
        user!.uid === event.originalCalendarEvent.user.uid ? "#0081eb" : "gray",
      color: "white",
      borderRadius: "none",
      opacity: 0.8,
    };

    return { style };
  };

  return (
    <Calendar
      className="h-100 p-4"
      //* Language
      culture="es"
      localizer={calendarLocalizer}
      messages={getCalendarMessagesLocale("es")}
      //* State
      date={date}
      view={view}
      //* Calendar events & UI.
      events={mappedCustomBigCalendarEvents}
      components={{
        event: CalendarEventBox,
      }}
      //* Events
      onDoubleClickEvent={handleDoubleClick}
      onSelectEvent={handleSelectCalendarEvent}
      onView={handleViewChange}
      // Events to handle state.
      onNavigate={handleNavigate}
      // Events to customize UI.
      eventPropGetter={eventStyleGetter}
    />
  );
};

export default BigCalendarContainer;
