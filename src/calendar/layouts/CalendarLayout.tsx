import { Outlet } from "react-router";

import CalendarNavbar from "../components/CalendarNavbar";

const CalendarLayout = function () {
  return (
    <div>
      <header>
        <CalendarNavbar />
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default CalendarLayout;
