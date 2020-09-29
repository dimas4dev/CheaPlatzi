import React from "react";
import "../assets/styles/pages/Login.scss";
import Logo from "../assets/images/logo.svg";

const Login = () => {
  return (
    <section>
      <article className="Container">
        <figure className="Container__Logo">
          <img src={Logo} alt="" />
        </figure>
        <form className="Form" action="">
          <h2>Login into your acount</h2>
          <input
            className="Form__Input"
            type="text"
            placeholder="Direccion de Correo Electronico"
          />
          <input
            className="Form__Input"
            type="password"
            placeholder="Contraseña"
          />
          <span className="Form__Links">
            <input type="checkbox" />
            Recuerdame
            <a href="#">Se te ha olvidado la Contraseña?</a>
          </span>
          <button>Iniciar Sesion</button>
        </form>
      </article>
    </section>
  );
};
export default Login;
