import { Outlet } from "react-router";

import CalendarNavbar from "../components/layout/CalendarNavbar";

const CalendarLayout = function () {
  return (
    <div className="d-flex flex-column vh-100 vw-100">
      <header>
        <CalendarNavbar />
      </header>
      <main className="flex-fill h-auto">
        <Outlet />
      </main>
    </div>
  );
};

export default CalendarLayout;
