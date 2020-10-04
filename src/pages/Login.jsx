import React from "react";
import { Link } from "react-router-dom";
import "../assets/styles/pages/Login.scss";
import Logo from "../assets/images/logo.svg";
import backgroundLogin from "../assets/images/background-login.png";
import URL_GET from "../config/get.js";

const Login = () => {
  document.addEventListener("submit", async (e) => {
    e.preventDefault();
    let mail = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    function resetForm() {
      document.getElementById("loginForm").reset();
    }

    let options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      },
      body: JSON.stringify({
        email: mail,
        password: password,
      }),
    };

    let res = await fetch(URL_GET, options);
    if (res.status === 201) {
      location.href = "/";
      resetForm();
    } else {
      alert("Problemas para acceder a tu usuario");
    }
  });

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
        <form className="Form" action="" id="loginForm">
          <h3>Inicia Sesión</h3>
          <input
            className="Form__Input"
            type="text"
            placeholder="Correo Electrónico"
            id="email"
          />
          <input
            className="Form__Input"
            type="password"
            placeholder="Contraseña"
            id="password"
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
          <button>Iniciar Sesion</button>
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
export default Login;
