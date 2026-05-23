import { Outlet } from "react-router";

import AddEventFloatingActionButton from "../components/layout/AddEventFloatingActionButton";

import CalendarNavbar from "../components/layout/CalendarNavbar";

const CalendarLayout = function () {
  return (
    <>
      {/* Application content */}
      <div className="d-flex flex-column vh-100 vw-100">
        <header>
          <CalendarNavbar />
        </header>
        <main className="flex-fill h-auto">
          <Outlet />
        </main>
      </div>
      {/* Floating action button */}
      <AddEventFloatingActionButton />
      {/* Container for modals */}
      <div id="modal-container"></div>
    </>
  );
};

export default CalendarLayout;
