import { BrowserRouter, Navigate, Route, Routes } from "react-router";

import type { AuthStatus } from "../types/AuthStatus.types";

import AuthLayout from "../auth/layouts/AuthLayout";

import CalendarPage from "../calendar/pages/calendar/CalendarPage";
import LoginPage from "../auth/pages/login/LoginPage";
import RegisterPage from "../auth/pages/register/RegisterPage";

const AppRouter = function () {
  const authStatus: AuthStatus = "not-authenticated" as AuthStatus;

  return (
    <BrowserRouter>
      <Routes>
        {authStatus === "authenticated" && (
          <>
            <Route path="/" element={<CalendarPage />} />
            <Route path="/*" element={<Navigate to="/" />} />
          </>
        )}
        {authStatus === "not-authenticated" && (
          <>
            <Route path="/auth" element={<AuthLayout />}>
              <Route path="/auth/login" element={<LoginPage />} />
              <Route path="/auth/register" element={<RegisterPage />} />
            </Route>
            <Route path="/*" element={<Navigate to="/auth/login" />} />
          </>
        )}
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
