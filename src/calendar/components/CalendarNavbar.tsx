import { Calendar, DoorOpen } from "lucide-react";

const CalendarNavbar = () => {
  return (
    <nav className="navbar navbar-dark bg-dark mb-4 px-4">
      <span className="navbar-brand d-flex gap-2 align-items-center">
        <Calendar />
        <span>Usuario</span>
      </span>

      <button className="btn btn-danger">
        <DoorOpen />
        &nbsp;
        <span>Salir</span>
      </button>
    </nav>
  );
};

export default CalendarNavbar;
