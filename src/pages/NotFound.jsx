import React from "react";
import { Link } from "react-router-dom";

import "../assets/styles/pages/NotFound.scss";

const NotFound = () => {
  return (
    <section className="notFound">
      <h1 className="notFound__title">ERROR 404</h1>
      <h2 className="notFound__subtitle">
        Aquí no hay nada.
        <br />
        Intenta buscar algo similar de nuevo.
      </h2>
      <img
        src="https://www.alfabetajuega.com/wp-content/uploads/2019/09/pikachu-pokemon-triste-ojos.jpg"
        alt="pikachu"
        className="notFound__image"
      />
      <Link to="/" className="notFound__button">
        Inicio
      </Link>
    </section>
  );
};

export default NotFound;
