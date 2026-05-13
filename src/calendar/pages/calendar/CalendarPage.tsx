import { Calendar, dateFnsLocalizer, DateLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";

import { addHours, format, getDay, parse, startOfWeek } from "date-fns";
import { enUS } from "date-fns/locale";

const locales = {
  "en-US": enUS,
};

const localizer: DateLocalizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});

const events = [
  {
    title: "Cumpleaños del lider",
    notes: "Se realizará una celebración en grupo.",
    start: new Date(),
    end: addHours(new Date(), 2),
    bgColor: "#FAFAFA",
  },
];

const CalendarPage = function () {
  return (
    <>
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        className="h-100 p-4"
      />
    </>
  );
};

export default CalendarPage;
