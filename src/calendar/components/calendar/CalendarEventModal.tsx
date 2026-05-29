import Modal from "react-modal";

import type { CalendarEvent } from "../../../types/interfaces/CalendarEvent.interface";
import type { CalendarModalFormValues } from "../../../types/interfaces/forms/CalendarModalFormValues.interface";

import useCalendarStore from "../../../store/hooks/useCalendarStore";
import useUiStore from "../../../store/hooks/useUiStore";

import AppModal from "../../../shared/components/AppModal";
import CalendarEventModalForm from "./CalendarEventModalForm";

import "react-datepicker/dist/react-datepicker.css";

Modal.setAppElement("#root");

const CalendarEventModal = function () {
  const { isDateModalOpen, closeDateModal } = useUiStore();
  const { selectedCalendarEvent, startUploadingOfCalendarEvent } =
    useCalendarStore();

  const eventHasStartDate = Boolean(selectedCalendarEvent?.startDateTimestamp);
  const eventHasEndDate = Boolean(selectedCalendarEvent?.endDateTimestamp);

  const calendarFormValues: CalendarModalFormValues = {
    eventTitle: selectedCalendarEvent?.title || "",
    note: selectedCalendarEvent?.note || "",
    start: eventHasStartDate
      ? new Date(selectedCalendarEvent!.startDateTimestamp)
      : new Date(),
    end: eventHasEndDate
      ? new Date(selectedCalendarEvent!.endDateTimestamp)
      : new Date(),
  };

  const handleSubmit = async (formValues: CalendarModalFormValues) => {
    const modifiedEvent: CalendarEvent = {
      ...selectedCalendarEvent!,
      title: formValues.eventTitle,
      note: formValues.note,
      startDateTimestamp: formValues.start.getTime(),
      endDateTimestamp: formValues.end.getTime(),
    };

    await startUploadingOfCalendarEvent(modifiedEvent);
    closeDateModal();
  };

  return (
    <AppModal
      title="Nuevo evento"
      isOpen={isDateModalOpen}
      onClose={closeDateModal}
    >
      <CalendarEventModalForm
        calendarFormValues={calendarFormValues}
        onSubmit={handleSubmit}
      />
    </AppModal>
  );
};

export default CalendarEventModal;
