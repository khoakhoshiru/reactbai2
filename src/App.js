import logo from "./logo.svg";
import "./App.css";
import Home from "./component/Home";

import React, { Component } from "react";

export default class App extends Component {
  render() {
    return (
      <div>
        <Home />
      </div>
    );
  }
}
