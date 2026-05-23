import { PlusIcon } from "lucide-react";
import FloatingActionButton from "../../../shared/components/FloatingActionButton";
import useUiStore from "../../../store/hooks/useUiStore";
import useCalendarStore from "../../../store/hooks/useCalendarStore";

const AddEventFloatingActionButton = function () {
  const { openDateModal } = useUiStore();
  const { unselectCalendarEvent } = useCalendarStore();

  const handleClick = () => {
    unselectCalendarEvent();
    openDateModal();
  };

  return (
    <FloatingActionButton onClick={handleClick}>
      <PlusIcon className="floating-action-button-icon" />
    </FloatingActionButton>
  );
};

export default AddEventFloatingActionButton;
