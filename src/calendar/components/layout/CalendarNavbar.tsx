import { Calendar, DoorOpen, UserCircle2 } from "lucide-react";

const CalendarNavbar = () => {
  return (
    <nav className="navbar px-4 border-bottom">
      <span className="navbar-brand d-flex gap-2 align-items-center">
        <Calendar />
        <span>Calendario</span>
      </span>

      <div className="d-flex gap-2 align-items-center">
        <span className="d-inline-flex gap-1 align-items-center">
          <UserCircle2 />
          <span>Usuario</span>
        </span>
        <button className="btn btn-danger">
          <DoorOpen />
          &nbsp;
          <span>Salir</span>
        </button>
      </div>
    </nav>
  );
};

export default CalendarNavbar;
