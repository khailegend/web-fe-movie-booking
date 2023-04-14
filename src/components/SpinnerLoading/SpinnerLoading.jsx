import React from "react";
import { Cube } from "styled-loaders-react";
import "./SpinnerLoading.scss";
export default function SpinnerLoading() {
  return (
    <div className="loader">
      <Cube color="#60c5ef" size="70px" />
    </div>
  );
}
