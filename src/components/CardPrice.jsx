import React from "react";
import "../assets/styles/components/CardPrice.scss";

const CardPrice = ({ item }) => {
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
          src="https://logos-marcas.com/wp-content/uploads/2020/04/Amazon-Logo.png"
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
