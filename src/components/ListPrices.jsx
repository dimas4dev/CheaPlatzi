import React from "react";
import { Link } from "react-router-dom";

import { connect } from "react-redux";

import CardPrice from "./CardPrice";
import "../assets/styles/components/CardPrice.scss";

const ListPrices = ({ productsSearch }) => {
  return (
    <section className="cardPrice">
      <ul>
        {productsSearch.map((item) => {
          return (
            <li key={item.id}>
              <CardPrice item={item} />
            </li>
          );
        })}
      </ul>
    </section>
  );
};

const mapStateToProps = (reducers) => {
  return reducers.productsReducer;
};

export default connect(mapStateToProps, {})(ListPrices);
