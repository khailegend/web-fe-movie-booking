import React, { Fragment } from "react";
import { Route } from "react-router-dom";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
export const HomeTemplate = (props) => {
  return (
    <Fragment>
      <Header />
      {props.children}
      <Footer />
    </Fragment>
  );
};