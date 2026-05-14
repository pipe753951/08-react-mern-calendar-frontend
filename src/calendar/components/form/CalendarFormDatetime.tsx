import type { MouseEvent, KeyboardEvent } from "react";

import { es } from "date-fns/locale";
import DatePicker, { registerLocale } from "react-datepicker";

interface CalendarFormDateProps {
  date: Date;
  minDate?: Date;
  onChange(
    date: Date | null,
    event?: MouseEvent<HTMLElement> | KeyboardEvent<HTMLElement>,
  ): void;
}

registerLocale("es", es);

const CalendarFormDatetime = function ({
  date,
  minDate,
  onChange,
}: CalendarFormDateProps) {
  return (
    <DatePicker
      // Styles
      className="form-control"
      wrapperClassName="w-100"
      // Locale and time appearance
      locale="es"
      timeCaption="Hora"
      showTimeSelect
      dateFormat="Pp"
      // Values
      minDate={minDate}
      selected={date}
      onChange={onChange}
    />
  );
};

export default CalendarFormDatetime;
