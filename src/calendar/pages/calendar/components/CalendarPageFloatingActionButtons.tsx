import useAuthStore from "../../../../store/hooks/useAuthStore";
import useCalendarStore from "../../../../store/hooks/useCalendarStore";

import AddCalendarEventFloatingActionButton from "../../../components/layout/floating_action_buttons/AddCalendarEventFloatingActionButton";
import RemoveCalendarEventFloatingActionButton from "../../../components/layout/floating_action_buttons/RemoveCalendarEventFloatingActionButton";

const CalendarPageFloatingActionButtons = function () {
  const { user } = useAuthStore();
  const { selectedCalendarEvent } = useCalendarStore();

  const showDeleteCalendarEventButton =
    selectedCalendarEvent &&
    selectedCalendarEvent.id !== "new" &&
    selectedCalendarEvent.user.uid === user?.uid;

  return (
    <div className="floating-action-buttons-container">
      {showDeleteCalendarEventButton && (
        <RemoveCalendarEventFloatingActionButton />
      )}
      <AddCalendarEventFloatingActionButton />
    </div>
  );
};

export default CalendarPageFloatingActionButtons;
