import { useState, type ChangeEvent } from "react";

import Modal from "react-modal";

import { SaveIcon } from "lucide-react";

import { addHours } from "date-fns";
import DatePicker from "react-datepicker";

import AppModal from "../../../shared/components/AppModal";

import "react-datepicker/dist/react-datepicker.css";

Modal.setAppElement("#root");

type CalendarModalFormDates = "start" | "end";

interface CalendarModalFormValues {
  eventTitle: string;
  note: string;
  start: Date;
  end: Date;
}

const CalendarModal = function () {
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

  const handleCalendarDateChange = (
    date: Date | null,
    name: CalendarModalFormDates,
  ) => {
    if (!date) return;
    setFormValues(
      (prevFormValues): CalendarModalFormValues => ({
        ...prevFormValues,
        [name]: date,
      }),
    );
  };

  return (
    <AppModal title="Nuevo Evento">
      <form>
        <div className="form-group mb-2">
          <label>Fecha y hora inicio</label>
          <DatePicker
            className="form-control"
            wrapperClassName="w-100"
            selected={formValues.start}
            onChange={(date: Date | null) =>
              handleCalendarDateChange(date, "start")
            }
          />
        </div>

        <div className="form-group mb-2">
          <label>Fecha y hora fin</label>
          <DatePicker
            className="form-control"
            wrapperClassName="w-100"
            selected={formValues.end}
            onChange={(date: Date | null) =>
              handleCalendarDateChange(date, "end")
            }
          />
        </div>

        <div className="form-group mb-2">
          <label>Titulo y notas</label>
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

export default CalendarModal;
