import type { Messages } from "react-big-calendar";

import type { Locale } from "../types/Locale.types";

import { spanishCalendarLocale } from "./es/spanish.calendar-messages.locale";

const calendarMessageLocales: Record<Locale, Messages> = {
  es: spanishCalendarLocale,
};

const getCalendarMessagesLocale = function (locale: Locale): Messages {
  return calendarMessageLocales[locale];
};

export default getCalendarMessagesLocale;
