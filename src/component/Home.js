import React, { Component } from "react";
import Header from "./Header";
import Content from "./Content";

export default class Home extends Component {
  render() {
    return (
      <div>
        <Header />
        <Content />
      </div>
    );
  }
}
