import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import CalendarApp from "./CalendarApp.tsx";

import "bootstrap/dist/css/bootstrap.min.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <CalendarApp />
  </StrictMode>,
);
