import React from "react";
import Button from "./Button";

import "../assets/styles/components/CardHome.scss";

const CardHome = ({
  linkImage,
  productoName,
  productBrand,
  productDescription,
}) => {
  return (
    <article className="card--home">
      <figure>
        <img src={linkImage} alt="producto" />
      </figure>
      <div className="card--detail">
        <div className="card--detail-title">
          <h5>{productoName}</h5>
          <hr className="divider__product" />
        </div>
        <div className="card--detail-subtitle">
          <p>{productBrand}</p>
        </div>
        <div className="card--detail-description">
          <p>{productDescription}</p>
        </div>
      </div>
      <Button text="Comparar" classnames="button--popular" />
    </article>
  );
};

export default CardHome;
