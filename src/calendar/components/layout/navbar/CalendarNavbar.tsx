import { Calendar } from "lucide-react";

import CalendarNavbarUserDropdown from "./CalendarNavbarUserDropdown";

const CalendarNavbar = () => {
  return (
    <nav className="navbar px-4 border-bottom">
      <span className="navbar-brand d-flex gap-2 align-items-center">
        <Calendar />
        <span>Calendario</span>
      </span>

      <CalendarNavbarUserDropdown />
    </nav>
  );
};

export default CalendarNavbar;
