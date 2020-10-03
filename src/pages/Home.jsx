import React from "react";
import { connect } from "react-redux";

import * as productsActions from "../redux/actions/productsActions";

import Search from "../components/Search";
import CardFunctions from "../components/CardFunctions";
import ListCards from "../components/ListCards";
import Button from "../components/Button";

import yellow from "../assets/images/yellow.png";
import dark from "../assets/images/dark.png";
import blue from "../assets/images/blue.png";
import "../assets/styles/pages/Home.scss";

const Home = (props) => {
  return (
    <main className="home">
      <div className="home__title-section">
        <h2 className="home__tittle">
          Compara el precio de múltiples productos en un solo lugar
        </h2>
        <hr className="divider" />
      </div>
      <div className="home__search">
        <Search
          inputStyles="home__input"
          action="Buscar"
          guide="¿Qué artículo buscas?"
          styles="button--home"
        />
      </div>
      <div className="divider__empty"></div>
      <div className="home__title-section">
        <h2 className="home__functions">¿Cómo funciona?</h2>
        <hr className="divider" />
      </div>
      <div className="divider__empty"></div>
      <div className="container__functions">
        <CardFunctions
          text="1. Busca el producto que te interesa"
          background={yellow}
        />
        <CardFunctions
          text="2. Elige el más económico de la lista"
          background={dark}
        />
        <CardFunctions
          text="3. Ve directo al lugar de compra"
          background={blue}
        />
      </div>
      <div className="divider__empty"></div>
      <div className="home__title-section">
        <h2 className="home__popular">Artículos populares</h2>
        <hr className="divider" />
      </div>
      <div className="divider__empty"></div>

      <ListCards />

      <div className="divider__empty"></div>
      <div className="home__title-section">
        <h2 className="home__choose">Nosotros comparamos, tú eliges</h2>
        <hr className="divider" />
        <div className="divider__empty"></div>
      </div>
      <div className="home__button--register">
        <Button
          text="Regístrate"
          classnames="button--register button--yellow"
        />
      </div>
    </main>
  );
};

const mapStateToProps = (reducers) => {
  return reducers.productsReducer;
};

export default connect(mapStateToProps, productsActions)(Home);
