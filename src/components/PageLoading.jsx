import React from "react";

import "../assets/styles/components/PageLoading.scss";
import Loader from "./Loader";

function PageLoading() {
  return (
    <div className="PageLoading">
      <Loader />
    </div>
  );
}

export default PageLoading;
