import React from "react";
import "../assets/styles/components/CardPrice.scss";

import amazon from "../assets/images/amazon.png";
import mercadoLibre from "../assets/images/mercado_libre.png";
import eBay from "../assets/images/ebay.png";
import bestBuy from "../assets/images/best_buy.png";

const CardPrice = ({ item }) => {

  const switchMarker = (id) => {
    switch (id) {
      case 1:
        return amazon;

      case 2:
        return mercadoLibre;

      case 3:
        return eBay;

      case 4:
        return bestBuy;

      default:
        console.log('Quedó mal el switch');
    }
  };

  return (
    <article className="card__container">
      <div className="card__image">
        <img src={item.picture} alt="Imagen del Producto" />
      </div>
      <div className="card__details">
        <h1 className="card__details--title">{item.name}</h1>
      </div>
      <div className="card__market">
        <img
          src={switchMarker(item.store.id)}
          alt="imagen del E-comerce"
        />
      </div>
      <div className="card__price">
        <p>{item.price}</p>
      </div>
      <div className="card__button">
        <a href={item.url} className="card__button--link" target="_blank">
          Comprar
        </a>
      </div>
    </article>
  );
};

export default CardPrice;
