import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../assets/styles/pages/Login.scss";
import Logo from "../assets/images/logo.svg";
import backgroundLogin from "../assets/images/background-login.png";
import URL_GET from "../config/get.js";
import { withRouter } from "react-router-dom";

const Login = (props) => {
  const [datos, setDatos] = useState({
    email: "",
    password: "",
  });

  const handleInputChange = (event) => {
    setDatos({
      ...datos,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    let options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      },
      body: JSON.stringify({
        email: datos.email,
        password: datos.password,
      }),
    };

    let res = await fetch(URL_GET, options);
    if (res.status === 201) {
      let res = await fetch(URL_GET, options).then((respuesta) =>
        respuesta.json().then((respuesta1) => {
          localStorage.getItem("name");
          localStorage.getItem("lastname");
          localStorage.setItem("name", respuesta1.user.first_name);
          localStorage.setItem("lastname", respuesta1.user.last_name);
          props.history.push("/Main");
        })
      );
    } else {
      alert("Problemas para acceder a tu usuario");
    }
  };

  function forgotPass() {
    alert(
      "Envíanos un correo a hola@vsbuy.xyz y te restableceremos tus accesos"
    );
  }

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
        <form className="Form" action="" id="loginForm" onSubmit={handleSubmit}>
          <h3>Inicia Sesión</h3>
          <input
            className="Form__Input"
            type="text"
            placeholder="Correo Electrónico"
            id="email"
            onChange={handleInputChange}
            name="email"
          />
          <input
            className="Form__Input"
            type="password"
            placeholder="Contraseña"
            id="password"
            onChange={handleInputChange}
            name="password"
          />
          <span className="Form__Links">
            <label htmlFor="">
              <input type="checkbox" />
              Recuérdame
            </label>
            <p href="#" id="forgot" onClick={forgotPass}>
              ¿Olvidaste tu contraseña?
            </p>
          </span>
          <button type="submit">Iniciar Sesion</button>
          <p className="Form__Redirection">
            Si aún no te has registrado, ingresa{" "}
            <Link to="/register">aquí</Link>
          </p>
        </form>
        <p id="passForgot" className="text__forgotPass"></p>
      </article>
    </section>
  );
};
export default withRouter(Login);
