import { TrashIcon } from "lucide-react";
import FloatingActionButton from "../../../../shared/components/FloatingActionButton";
import useUiStore from "../../../../store/hooks/useUiStore";
import useCalendarStore from "../../../../store/hooks/useCalendarStore";

const RemoveCalendarEventFloatingActionButton = function () {
  const { openDateModal } = useUiStore();
  const { selectNewCalendarEvent } = useCalendarStore();

  const handleClick = () => {
    selectNewCalendarEvent();
    openDateModal();
  };

  return (
    <FloatingActionButton variant="danger" size="sm" onClick={handleClick}>
      <TrashIcon className="floating-action-button-sm-icon" />
      <span>Eliminar nota</span>
    </FloatingActionButton>
  );
};

export default RemoveCalendarEventFloatingActionButton;
