import { CalendarDaysIcon } from "lucide-react";
import "../styles/SplashScreen.css";

const SplashScreen = function () {
  return (
    <div className="splash-screen">
      <div className="splash-screen-icon-container">
        <CalendarDaysIcon className="splash-screen-icon" />
      </div>
      <div
        className="spinner-border text-primary splash-screen-spinner"
        role="status"
      >
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
};

export default SplashScreen;
