import CalendarEventModal from "../../components/calendar/CalendarEventModal";
import CalendarPageFloatingActionButtons from "./components/CalendarPageFloatingActionButtons";
import CalendarPageMainContent from "./components/CalendarPageMainContent";

import "react-big-calendar/lib/css/react-big-calendar.css";

const CalendarPage = function () {
  return (
    <>
      <CalendarPageMainContent />
      <CalendarPageFloatingActionButtons />
      <CalendarEventModal />
    </>
  );
};

export default CalendarPage;
