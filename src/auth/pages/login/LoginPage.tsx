import type React from "react";

import useForm from "../../../shared/hooks/useForm";
import useAuthStore from "../../../store/hooks/useAuthStore";
import { toast } from "sonner";
import { Link } from "react-router";

const LoginPage = function () {
  const { startLogin } = useAuthStore();

  const { formState, changeInput } = useForm(
    { email: "", password: "" },
    {
      email: () => null,
      password: (value) => (value !== "123" ? "No válido" : null),
    },
  );

  const handleLoginError = (
    errorMessage: string,
    errorDescription?: string,
  ) => {
    toast.error(errorMessage, { description: errorDescription });
  };

  const handleSubmit = (event: React.SubmitEvent<HTMLFormElement>) => {
    event.preventDefault();
    startLogin(formState, handleLoginError);
  };

  return (
    <>
      <h1 className="auth-card-header">Iniciar sesión</h1>

      <form onSubmit={handleSubmit}>
        <div className="form-group mb-2">
          <input
            type="text"
            className="form-control"
            placeholder="Correo"
            name="email"
            value={formState.email}
            onChange={changeInput}
          />
        </div>
        <div className="form-group mb-2">
          <input
            type="password"
            className="form-control"
            placeholder="Contraseña"
            name="password"
            value={formState.password}
            onChange={changeInput}
          />
        </div>

        <p className="my-3">
          ¿No te registraste?&#160;
          <Link to="/auth/register">Regístrate</Link>
          <span>&#46;</span>
        </p>
        <div className="form-group auth-actions">
          <button type="submit" className="btn btn-primary w-100">
            Iniciar sesión
          </button>
        </div>
      </form>
    </>
  );
};

export default LoginPage;
