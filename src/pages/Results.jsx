import React from "react";

import ListPrices from "../components/ListPrices";
import BackButton from "../components/BackButton";

import Search from "../components/Search";

const Results = () => {
  return (
    <container className="results-page">
      <BackButton />
      <Search
        inputStyles="search__input"
        guide="¿Qué artículo buscas?"
        action="Buscar"
        styles="button--search button--yellow"
      />
      <ListPrices />
    </container>
  );
};

export default Results;
