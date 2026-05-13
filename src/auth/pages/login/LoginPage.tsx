const LoginPage = function () {
  return (
    <>
      <h1 className="mb-3 text-center">Iniciar sesión</h1>

      <form>
        <div className="form-group mb-2">
          <input type="text" className="form-control" placeholder="Correo" />
        </div>
        <div className="form-group mb-2">
          <input
            type="password"
            className="form-control"
            placeholder="Contraseña"
          />
        </div>
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
