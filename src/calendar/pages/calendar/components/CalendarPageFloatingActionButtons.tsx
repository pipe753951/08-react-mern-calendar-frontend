import AddCalendarEventFloatingActionButton from "../../../components/layout/floating_action_buttons/AddCalendarEventFloatingActionButton";
import RemoveCalendarEventFloatingActionButton from "../../../components/layout/floating_action_buttons/RemoveCalendarEventFloatingActionButton copy";

const CalendarPageFloatingActionButtons = function () {
  return (
    <div className="floating-action-buttons-container">
      <RemoveCalendarEventFloatingActionButton />
      <AddCalendarEventFloatingActionButton />
    </div>
  );
};

export default CalendarPageFloatingActionButtons;
