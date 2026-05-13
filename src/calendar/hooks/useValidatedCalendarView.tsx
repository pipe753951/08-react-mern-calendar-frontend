import { useEffect, useMemo } from "react";
import { useSearchParams } from "react-router";

import type { View as CalendarView } from "react-big-calendar";

interface useValidatedCalendarViewState {
  calendarView: CalendarView;
  setCalendarView(view: CalendarView): void;
}

const validCalendarViews: CalendarView[] = ["agenda", "day", "month", "week"];

const useValidatedCalendarView = function (): useValidatedCalendarViewState {
  const [searchParams, setSearchParams] = useSearchParams();

  const calendarViewLike = useMemo<string>(() => {
    const currentView = searchParams.get("view");
    return currentView || ("month" as CalendarView);
  }, [searchParams]);

  const isCalendarViewValid = useMemo(
    () => validCalendarViews.includes(calendarViewLike as CalendarView),
    [calendarViewLike],
  );

  useEffect(() => {
    if (isCalendarViewValid) return;

    setSearchParams(
      (prevParams) => {
        const newParams = new URLSearchParams(prevParams);
        newParams.set("view", "month" as CalendarView);

        return newParams;
      },
      { replace: true },
    );
  }, [isCalendarViewValid, setSearchParams]);

  const setCalendarView = (view: CalendarView) => {
    setSearchParams((prevParams) => {
      const newParams = new URLSearchParams(prevParams);
      newParams.set("view", view.toString());
      return newParams;
    });
  };

  return {
    calendarView: isCalendarViewValid
      ? (calendarViewLike as CalendarView)
      : "month",
    setCalendarView,
  };
};

export default useValidatedCalendarView;
