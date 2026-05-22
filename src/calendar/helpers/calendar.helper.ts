import { startOfDay, endOfDay } from "date-fns";

const isEventAllDay = function (
  startDateTimestamp: number,
  endDateTimestamp: number,
) {
  const startDate = new Date(startDateTimestamp);

  const expectedStartDateTimestamp = startOfDay(startDate).getTime();
  const expectedEndDateTimestamp = endOfDay(startDate).getTime();

  const isStartDateAsExpected =
    startDateTimestamp === expectedStartDateTimestamp;
  const isEndDateAsExpected = endDateTimestamp === expectedEndDateTimestamp;

  return isStartDateAsExpected && isEndDateAsExpected;
};

export { isEventAllDay };
