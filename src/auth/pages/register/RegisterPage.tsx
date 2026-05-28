import useForm from "../../../shared/hooks/useForm";

const RegisterPage = function () {
  const { formState, changeInput } = useForm({
    name: "",
    email: "",
    password: "",
    confirmedPassword: "",
  });

  const handleSubmit = (event: React.SubmitEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.debug({ event, formState });
  };

  return (
    <>
      <h1 className="mb-3">Regístrate</h1>

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

        <div className="form-group auth-actions">
          <button type="submit" className="btn btn-primary w-100">
            Registrarse
          </button>
        </div>
      </form>
    </>
  );
};

export default RegisterPage;
