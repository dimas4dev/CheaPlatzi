import React from "react";

import imageCardHome from "../assets/images/imageHome.png";
import Button from "./Button";

import "../assets/styles/components/CardHome.scss";

const CardHome = () => {
  return (
    <article className="card--home">
      <figure>
        {/* <img src={imageCardHome} alt="Imágen producto" /> */}
        <img
          src="https://s1.qwant.com/thumbr/0x380/0/7/324e03aab78654cd0c027cf8321477ed4b9b7189cb995d0bcf14800457a5c4/playstation-4-slim-vertical-product-shot-01-us-07sep16.jpg?u=https%3A%2F%2Fmedia.playstation.com%2Fis%2Fimage%2FSCEA%2Fplaystation-4-slim-vertical-product-shot-01-us-07sep16%3F%24native%24&q=0&b=1&p=0&a=1"
          alt="producto"
        />
      </figure>
      <div className="card--detail">
        <div className="card--detail-title">
          <h5>Nombre Producto</h5>
          <hr className="divider__product" />
        </div>
        <div className="card--detail-subtitle">
          <p>Marca</p>
        </div>
        <div className="card--detail-description">
          <p>Descripción de producto</p>
        </div>
      </div>
      <Button text="Comparar" classnames="button--popular" />
    </article>
  );
};

export default CardHome;
