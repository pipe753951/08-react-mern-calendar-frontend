import { TrashIcon } from "lucide-react";

import useCalendarStore from "../../../../store/hooks/useCalendarStore";

import FloatingActionButton from "../../../../shared/components/FloatingActionButton";
import showCalendarErrorOnUi from "../../../helpers/showCalendarErrorOnUi";

const RemoveCalendarEventFloatingActionButton = function () {
  const { startDeletingSelectedCalendarEvent } = useCalendarStore();

  const handleClick = () => {
    startDeletingSelectedCalendarEvent(showCalendarErrorOnUi);
  };

  return (
    <FloatingActionButton variant="danger" size="sm" onClick={handleClick}>
      <TrashIcon className="floating-action-button-sm-icon" />
      <span>Eliminar nota</span>
    </FloatingActionButton>
  );
};

export default RemoveCalendarEventFloatingActionButton;
