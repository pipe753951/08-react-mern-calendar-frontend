import { addHours } from "date-fns";
import Modal from "react-modal";

import type { CalendarModalFormValues } from "../../../types/interfaces/forms/CalendarModalFormValues";

import useCalendarStore from "../../../hooks/useCalendarStore";
import useUiStore from "../../../hooks/useUiStore";

import AppModal from "../../../shared/components/AppModal";
import CalendarEventModalForm from "./CalendarEventModalForm";

import "react-datepicker/dist/react-datepicker.css";

Modal.setAppElement("#root");

const CalendarEventModal = function () {
  const { closeDateModal, isDateModalOpen } = useUiStore();
  const { selectedCalendarEvent } = useCalendarStore();

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
      : addHours(new Date(), 2),
  };

  const handleSubmit = (formValues: CalendarModalFormValues) => {
    console.log({ formValues });
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
