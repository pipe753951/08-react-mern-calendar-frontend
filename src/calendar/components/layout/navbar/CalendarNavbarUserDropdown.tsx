import { DoorOpenIcon, UserCircle2Icon } from "lucide-react";

import useAuthStore from "../../../../store/hooks/useAuthStore";

import "../../../styles/CalendarNavbarUserDropdown.css";

const CalendarNavbarUserDropdown = function () {
  const { user } = useAuthStore();

  return (
    <div className="dropdown">
      <button
        className="calendar-navbar-user-dropdown-toggle-button"
        type="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        <UserCircle2Icon className="calendar-navbar-dropdown-user-icon" />
      </button>
      <ul className="dropdown-menu dropdown-menu-end calendar-navbar-user-dropdown-menu">
        <li>
          <div className="calendar-navbar-dropdown-user-details">
            <UserCircle2Icon className="calendar-navbar-dropdown-user-details-user-circle" />
            <h1 className="calendar-navbar-dropdown-user-details-heading">
              {user?.name}
            </h1>
          </div>
        </li>
        <li>
          <div className="dropdown-divider"></div>
        </li>
        <li>
          <a
            className="dropdown-item calendar-navbar-dropdown-logout-item"
            href="#"
          >
            <DoorOpenIcon />
            &#160;
            <span>Cerrar sesión</span>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default CalendarNavbarUserDropdown;
