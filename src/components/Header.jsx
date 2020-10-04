import React from "react";
import { withRouter, Link } from "react-router-dom";
import Button from "./Button";

import Logo from "../assets/images/logo.svg";
import avatar from "../assets/images/avatar.png";
import "../assets/styles/components/Header.scss";

const Header = ({ location }) => {
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
              text="Login"
              classnames="button"
            />
          </Link>
          <Link to="/register">
            <Button
              className="button__space"
              text="Sign up"
              classnames="button button--space button--yellow"
            />
          </Link>
        </div>
      )}
      {location.pathname !== "/" && (
        <>
          <div className="header__search--avatar">
            <figure>
              <img className="avatar" src={avatar} alt="Avatar de usuario" />
            </figure>
          </div>
        </>
      )}
    </header>
  );
};

export default withRouter(Header);
