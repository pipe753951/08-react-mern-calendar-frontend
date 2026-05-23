import { useMemo, useState, type ChangeEvent, type SubmitEvent } from "react";

import { compareAsc, differenceInSeconds } from "date-fns";
import { toast } from "sonner";

import type { CalendarModalFormValues } from "../../../types/interfaces/forms/CalendarModalFormValues";
import CalendarFormDatetime from "../form/CalendarFormDatetime";
import { SaveIcon } from "lucide-react";

interface CalendarEventModalFormProps {
  calendarFormValues: CalendarModalFormValues;
  onSubmit(calendarEvent: CalendarModalFormValues): void;
}

const CalendarEventModalForm = function ({
  calendarFormValues,
  onSubmit,
}: CalendarEventModalFormProps) {
  const [formValues, setFormValues] =
    useState<CalendarModalFormValues>(calendarFormValues);

  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  const additionalTitleClass = useMemo<string>(() => {
    if (!isFormSubmitted) return "";

    return formValues.eventTitle ? "is-valid" : "is-invalid";
  }, [formValues.eventTitle, isFormSubmitted]);

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

  const handleCalendarStartDateSelect = (startDate: Date | null) => {
    if (!startDate) return;

    setFormValues((prevFormValues): CalendarModalFormValues => {
      const isEndDateEarlierThanStartDate =
        compareAsc(startDate, prevFormValues.end) === 1;
      const endDate = isEndDateEarlierThanStartDate
        ? startDate
        : prevFormValues.end;

      return {
        ...prevFormValues,
        start: startDate,
        end: endDate,
      };
    });
  };

  const handleCalendarEndDateSelect = (endDate: Date | null) => {
    if (!endDate) return;

    setFormValues(
      (prevFormValues): CalendarModalFormValues => ({
        ...prevFormValues,
        end: endDate,
      }),
    );
  };

  const handleSubmit = (event: SubmitEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsFormSubmitted(true);

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

    onSubmit(formValues);
  };

  return (
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
          className={`form-control ${additionalTitleClass}`}
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
  );
};

export default CalendarEventModalForm;
