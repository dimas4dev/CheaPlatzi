import React from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { getProducts } from "../redux/actions/productsActions";

import Button from "./Button";

import "../assets/styles/components/CardHome.scss";

const CardHome = ({
  linkImage,
  productoName,
  productBrand,
  productDescription,
  getProducts,
  history,
}) => {

  const handleClick = async () => {
    await getProducts(productoName.slice(0, 4));
    history.push("/results");
  };

  return (
    <article className="card--home">
      <figure>
        <img src={linkImage} alt="producto" />
      </figure>
      <div className="card--detail">
        <div className="card--detail-title">
          <h1>{productoName}</h1>
          <hr className="divider__product" />
        </div>
        <div className="card--detail-subtitle">
          <p>{productBrand}</p>
        </div>
        <div className="card--detail-description">
          <p>{productDescription}</p>
        </div>
      </div>

      <Button handleClick={handleClick} text="Comparar" classnames="button--popular" />

    </article>
  );
};

const mapStateToProps = ({ productsReducer }) => productsReducer;

const mapDispatchToProps = {
  getProducts,
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CardHome));
