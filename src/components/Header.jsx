import React from "react";
import { withRouter, Link } from "react-router-dom";
import Button from "./Button";

import Logo from "../assets/images/logo.svg";
import avatar from "../assets/images/avatar.png";
import "../assets/styles/components/Header.scss";

const Header = ({ location, history }) => {
  const usuario = localStorage.getItem("lastname");

  const handleChange = () => {
    localStorage.removeItem("name");
    localStorage.removeItem("usuario");
    localStorage.removeItem("lastname");
    history.push("/login");
  };
  return (
    <header className="header">
      <Link className="header__logo" to="/">
        <figure>
          <img src={Logo} alt="Logo de VsBuy" />
        </figure>
      </Link>

      {location.pathname === "/" && (
        <div className="container__buttons">
          <Link to="/login">
            <Button
              className="button__space"
              text="Acceder"
              classnames="button"
            />
          </Link>
          <Link to="/register">
            <Button
              className="button__space"
              text="Regístro"
              classnames="button button--space button--yellow"
            />
          </Link>
        </div>
      )}
      {location.pathname !== "/" && (
        <>
          <div className="header__search--avatar">
            <span style={{ color: "white" }}>Bienvenido {usuario}!</span>
            <button
              className="button button--space button--yellow"
              onClick={handleChange}
            >
              Cerrar Sesion
            </button>
          </div>
        </>
      )}
    </header>
  );
};

export default withRouter(Header);
