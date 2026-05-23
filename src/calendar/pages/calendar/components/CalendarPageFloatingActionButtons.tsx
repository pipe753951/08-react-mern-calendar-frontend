import useCalendarStore from "../../../../store/hooks/useCalendarStore";

import AddCalendarEventFloatingActionButton from "../../../components/layout/floating_action_buttons/AddCalendarEventFloatingActionButton";
import RemoveCalendarEventFloatingActionButton from "../../../components/layout/floating_action_buttons/RemoveCalendarEventFloatingActionButton copy";

const CalendarPageFloatingActionButtons = function () {
  const { selectedCalendarEvent } = useCalendarStore();

  const showDeleteSelectedCalendarEventButton =
    selectedCalendarEvent && selectedCalendarEvent.id !== "new";

  return (
    <div className="floating-action-buttons-container">
      {showDeleteSelectedCalendarEventButton && (
        <RemoveCalendarEventFloatingActionButton />
      )}
      <AddCalendarEventFloatingActionButton />
    </div>
  );
};

export default CalendarPageFloatingActionButtons;
