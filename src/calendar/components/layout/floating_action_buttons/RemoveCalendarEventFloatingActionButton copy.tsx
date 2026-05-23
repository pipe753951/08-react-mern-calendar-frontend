import { TrashIcon } from "lucide-react";

import FloatingActionButton from "../../../../shared/components/FloatingActionButton";
import useCalendarStore from "../../../../store/hooks/useCalendarStore";

const RemoveCalendarEventFloatingActionButton = function () {
  const { startDeletingEvent } = useCalendarStore();

  return (
    <FloatingActionButton
      variant="danger"
      size="sm"
      onClick={startDeletingEvent}
    >
      <TrashIcon className="floating-action-button-sm-icon" />
      <span>Eliminar nota</span>
    </FloatingActionButton>
  );
};

export default RemoveCalendarEventFloatingActionButton;
