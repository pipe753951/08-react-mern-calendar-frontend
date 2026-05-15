import { useState, type ChangeEvent, type SubmitEvent } from "react";

import { addHours, compareAsc, differenceInSeconds } from "date-fns";

import { SaveIcon } from "lucide-react";

import Modal from "react-modal";
import { toast } from "sonner";

import AppModal from "../../../shared/components/AppModal";
import CalendarFormDatetime from "../form/CalendarFormDatetime";

import "react-datepicker/dist/react-datepicker.css";

Modal.setAppElement("#root");

interface CalendarModalFormValues {
  eventTitle: string;
  note: string;
  start: Date;
  end: Date;
}

const CalendarEventModal = function () {
  const [formValues, setFormValues] = useState<CalendarModalFormValues>({
    eventTitle: "Usuario",
    note: "Esta es mi nota",
    start: new Date(),
    end: addHours(new Date(), 2),
  });

  const handleCalendarTitleChange = (
    event: ChangeEvent<HTMLInputElement, HTMLInputElement>,
  ) => {
    setFormValues((prevFormValues) => ({
      ...prevFormValues,
      eventTitle: event.target.value,
    }));
  };

  const handleCalendarNoteChange = (
    event: ChangeEvent<HTMLTextAreaElement, HTMLTextAreaElement>,
  ) => {
    setFormValues((prevFormValues) => ({
      ...prevFormValues,
      note: event.target.value,
    }));
  };

  const handleCalendarStartDateSelect = (date: Date | null) => {
    if (!date) return;

    setFormValues(
      (prevFormValues): CalendarModalFormValues => ({
        ...prevFormValues,
        start: date,
        end:
          compareAsc(date, prevFormValues.end) === 1
            ? date
            : prevFormValues.end,
      }),
    );
  };

  const handleCalendarEndDateSelect = (date: Date | null) => {
    if (!date) return;

    setFormValues(
      (prevFormValues): CalendarModalFormValues => ({
        ...prevFormValues,
        end: date,
      }),
    );
  };

  const handleSubmit = (event: SubmitEvent<HTMLFormElement>) => {
    event.preventDefault();

    const difference = differenceInSeconds(formValues.end, formValues.start);

    if (isNaN(difference)) {
      toast.error("Las fechas no son válidas, verifica su formato.");
      return;
    }

    if (difference < 0) {
      toast.error(
        "La fecha límite debe ser superior o igual que la fecha de inicio.",
      );
      return;
    }

    if (!formValues.eventTitle) {
      toast.error("El nuevo evento debe tener un título");
      return;
    }

    console.debug({ event });
  };

  return (
    <AppModal title="Nuevo evento">
      <form onSubmit={handleSubmit}>
        <div className="form-group mb-2">
          <label htmlFor="start">Fecha y hora inicio</label>
          <CalendarFormDatetime
            name="start"
            date={formValues.start}
            onChange={handleCalendarStartDateSelect}
          />
        </div>
        <div className="form-group mb-2">
          <label htmlFor="end">Fecha y hora fin</label>
          <CalendarFormDatetime
            name="end"
            date={formValues.end}
            minDate={formValues.start}
            onChange={handleCalendarEndDateSelect}
          />
        </div>
        <div className="form-group mb-2">
          <label htmlFor="title">Título</label>
          <input
            type="text"
            className="form-control"
            placeholder="Título del evento"
            name="title"
            autoComplete="off"
            value={formValues.eventTitle}
            onChange={handleCalendarTitleChange}
          />
          <small id="emailHelp" className="form-text text-muted">
            Una descripción corta
          </small>
        </div>
        <div className="form-group mb-2">
          <label htmlFor="notes">Notas</label>
          <textarea
            className="form-control"
            placeholder="Notas"
            rows={5}
            name="notes"
            value={formValues.note}
            onChange={handleCalendarNoteChange}
          />
          <small id="emailHelp" className="form-text text-muted">
            Información adicional
          </small>
        </div>
        <button type="submit" className="btn btn-outline-primary btn-block">
          <SaveIcon />
          <span>&nbsp;Guardar</span>
        </button>
      </form>
    </AppModal>
  );
};

export default CalendarEventModal;
