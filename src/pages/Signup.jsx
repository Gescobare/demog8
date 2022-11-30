import React, { Fragment } from "react";
import {Link} from 'react-router-dom';
import useForm from '../hooks/useForm';

function Signup() {
  const formSignup = () => {
  }  
  const { handleChange, values, errors, handleSubmit } = useForm(formSignup);

  return (
    <Fragment>
    <div className="container-scroller">
      <div className="container-fluid page-body-wrapper full-page-wrapper">
        <div className="row w-100 m-0">
          <div className="content-wrapper full-page-wrapper d-flex align-items-center auth login-bg">
            <div className="card col-lg-4 mx-auto">
              <div className="card-body px-5 py-5">
                <h3 className="card-title text-left mb-3">Registro</h3>
                <form onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label>Nombre Completo</label>
                    <input type="text" className="form-control p_input" minLength="4" name="name" onChange={handleChange}/>
                      {
                        errors.name && <p className="text-danger">{errors.name}</p>
                      }
                  </div>
                  <div className="form-group">
                    <label>Correo *</label>
                    <input type="email" className="form-control p_input" name="email" onChange={handleChange}/>
                      {
                        errors.email && <p className="text-danger">{errors.email}</p>
                      }
                  </div>
                  <div className="form-group">
                    <label>Contraseña</label>
                    <input type="password" className="form-control p_input" name="password" minLength="8" onChange={handleChange}/>
                      {
                        errors.password && <p className="text-danger">{errors.password}</p>
                      }
                  </div>
                  <div className="text-center">
                    <button type="submit" className="btn btn-primary btn-block enter-btn">Registrarse</button>
                  </div>
                  <p className="sign-up text-center">¿Ya tienes cuenta?<Link to="/" className=""> Iniciar sesión</Link></p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </Fragment>
  )
}

export default Signup