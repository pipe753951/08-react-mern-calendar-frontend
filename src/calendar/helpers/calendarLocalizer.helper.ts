import { dateFnsLocalizer, type DateLocalizer } from "react-big-calendar";
import { format, getDay, parse, startOfWeek } from "date-fns";
import { es } from "date-fns/locale";

const locales = {
  es,
};

const calendarLocalizer: DateLocalizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});

export { calendarLocalizer };
