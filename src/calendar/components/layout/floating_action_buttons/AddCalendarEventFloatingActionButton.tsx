import { PlusIcon } from "lucide-react";
import FloatingActionButton from "../../../../shared/components/FloatingActionButton";
import useUiStore from "../../../../store/hooks/useUiStore";
import useCalendarStore from "../../../../store/hooks/useCalendarStore";

const AddCalendarEventFloatingActionButton = function () {
  const { openDateModal } = useUiStore();
  const { selectNewCalendarEvent } = useCalendarStore();

  const handleClick = () => {
    selectNewCalendarEvent();
    openDateModal();
  };

  return (
    <FloatingActionButton onClick={handleClick}>
      <PlusIcon className="floating-action-button-icon" />
    </FloatingActionButton>
  );
};

export default AddCalendarEventFloatingActionButton;
