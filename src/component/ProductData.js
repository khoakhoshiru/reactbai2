import React, { Component } from "react";
import styles from "./fileCss/styleproduct.module.css ";
export default class ProductData extends Component {
  render() {
    return (
      <div className={styles.itemImg}>
        <img src={this.props.prod.url} />
      </div>
    );
  }
}
