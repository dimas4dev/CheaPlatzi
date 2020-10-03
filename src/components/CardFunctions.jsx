import React from "react";

import "../assets/styles/components/CardFunctions.scss";

const CardFunctions = ({ text, background }) => {
  return (
    <article
      className="card--function"
      style={{ backgroundImage: `url(${background})` }}
    >
      <p>{text}</p>
    </article>
  );
};

export default CardFunctions;
