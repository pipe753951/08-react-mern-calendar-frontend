import { Link } from "react-router";

import useForm from "../../../shared/hooks/useForm";
import showAuthErrorOnUi from "../../utilities/showAuthErrorOnUi";

import useAuthStore from "../../../store/hooks/useAuthStore";

const RegisterPage = function () {
  const { startRegister } = useAuthStore();
  const { formState, changeInput } = useForm({
    name: "",
    email: "",
    password: "",
    confirmedPassword: "",
  });

  const handleSubmit = (event: React.SubmitEvent<HTMLFormElement>) => {
    event.preventDefault();
    startRegister(formState, showAuthErrorOnUi);
  };

  return (
    <>
      <h1 className="auth-card-title">Regístrate</h1>

      <form onSubmit={handleSubmit}>
        <div className="form-group mb-2">
          <input
            type="text"
            className="form-control"
            placeholder="Nombre"
            name="name"
            value={formState.name}
            onChange={changeInput}
          />
        </div>
        <div className="form-group mb-2">
          <input
            type="email"
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

        <div className="form-group mb-2">
          <input
            type="password"
            className="form-control"
            placeholder="Repita la contraseña"
            name="confirmedPassword"
            value={formState.confirmedPassword}
            onChange={changeInput}
          />
        </div>

        <p className="my-3">
          ¿Ya te registraste?&#160;
          <Link to="/auth/login">Inicia sesión</Link>
          <span>&#46;</span>
        </p>

        <div className="form-group">
          <button type="submit" className="btn btn-primary w-100">
            Registrarse
          </button>
        </div>
      </form>
    </>
  );
};

export default RegisterPage;
