import React, { Component } from "react";
import Hstyle from "./fileCss/header.css";
import clsx from "clsx";
export default class Header extends Component {
  render() {
    return (
      <div className={clsx(Hstyle.div)}>
        <h1>Try glasses Online</h1>
      </div>
    );
  }
}
