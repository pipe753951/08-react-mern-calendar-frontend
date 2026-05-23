const RegisterPage = function () {
  return (
    <>
      <h1 className="mb-3 text-center">Regístrate</h1>

      <form>
        <div className="form-group mb-2">
          <input type="text" className="form-control" placeholder="Nombre" />
        </div>
        <div className="form-group mb-2">
          <input type="email" className="form-control" placeholder="Correo" />
        </div>

        <div className="form-group mb-2">
          <input
            type="password"
            className="form-control"
            placeholder="Contraseña"
          />
        </div>

        <div className="form-group mb-2">
          <input
            type="password"
            className="form-control"
            placeholder="Repita la contraseña"
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
