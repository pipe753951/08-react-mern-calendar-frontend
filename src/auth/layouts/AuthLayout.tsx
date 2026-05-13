import { Outlet } from "react-router";

import "../styles/auth.css";

const AuthLayout = function () {
  return (
    <div className="auth-container">
      <div className="auth-card">
        <Outlet />
      </div>
    </div>
  );
};

export default AuthLayout;
