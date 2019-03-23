import React, { Fragment } from "react";
import ReactDOM from "react-dom";

import ForgeClassComponent from "./class-component";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Fragment>
    <ForgeClassComponent />
  </Fragment>,
  rootElement
);
