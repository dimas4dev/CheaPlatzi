import React from "react";
import { Link } from "react-router-dom";
import "../assets/styles/pages/Login.scss";
import Logo from "../assets/images/logo.svg";
import backgroundLogin from "../assets/images/background-login.png";

const Login = () => {
  return (
    <section
      className="Login"
      style={{ backgroundImage: `url(${backgroundLogin})` }}
    >
      <article className="Container">
        <Link to="/">
          <figure className="Container__Logo">
            <img src={Logo} alt="Logo" />
          </figure>
        </Link>
        <form className="Form" action="">
          <h3>Inicia Sesión</h3>
          <input
            className="Form__Input"
            type="text"
            placeholder="Correo Electrónico"
          />
          <input
            className="Form__Input"
            type="password"
            placeholder="Contraseña"
          />
          <span className="Form__Links">
            <input type="checkbox" />
            Recuérdame
            <a href="#">¿Olvidaste tu contraseña?</a>
          </span>
          <button>Iniciar Sesion</button>
          <p className="Form__Redirection">
            Si aún no te has registrado, ingresa
            <Link to="/register">aquí</Link>
          </p>
        </form>
      </article>
    </section>
  );
};
export default Login;
