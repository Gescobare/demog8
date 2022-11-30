import React, { Fragment } from "react";
import { Link } from 'react-router-dom';
import useForm from '../hooks/useForm';

function Login() {

  const formLogin = () => {
  }  
  const { handleChange, values, errors, handleSubmit } = useForm(formLogin);

  return (
    <Fragment>
      <div className="container-scroller">
        <div className="container-fluid page-body-wrapper full-page-wrapper">
          <div className="row w-100 m-0">
            <div className="content-wrapper full-page-wrapper d-flex align-items-center auth login-bg">
              <div className="card col-lg-4 mx-auto">
                <div className="card-body px-5 py-5">
                  <h3 className="card-title text-left mb-3">Iniciar Sesión</h3>
                  <form onSubmit={handleSubmit}>
                    <div className="form-group">
                      <label>Correo *</label>
                      <input type="text" className="form-control p_input" id="inputEmail" name="email" onChange={handleChange}/>
                      {
                        errors.email && <p className="text-danger">{errors.email}</p>
                      }
                    </div>
                    <div className="form-group">
                      <label>Contraseña *</label>
                      <input type="text" className="form-control p_input" id="inputPass" name="password" minLength="8" onChange={handleChange}/>
                      {
                        errors.password && <p className="text-danger">{errors.password}</p>
                      }
                    </div>
                    <div className="form-group d-flex align-items-center justify-content-between">
                      <div className="form-check">
                        <label className="form-check-label">
                          <input type="checkbox" className="form-check-input"></input> Recuérdame </label>
                      </div>
                      <a href="#" className="forgot-pass">Olvidé mi contraseña</a>
                    </div>
                    <div className="text-center">
                      <button type="submit" className="btn btn-primary btn-block enter-btn">Ingresar</button>
                    </div>
                    <p className="sign-up">¿Aún no tienes cuenta? <Link to="/signup" className=""> Regístrate</Link></p>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default Login;