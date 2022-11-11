import React, { Component } from "react";
import styles from "./fileCss/styleproduct.module.css";
import clsx from "clsx";
import modelImage from "./asset/glassesImage/model.jpg";
import imgItem from "./asset/glassesImage/g2.jpg";

export default class ProductListItem extends Component {
  ProductItem = [
    {
      id: 1,
      price: 30,
      name: "GUCCI G8850U",
      url: "./asset/glassesImage/v1.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 2,
      price: 50,
      name: "GUCCI G8759H",
      url: "./asset/glassesImage/v2.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 3,
      price: 30,
      name: "DIOR D6700HQ",
      url: "./asset/glassesImage/v3.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 4,
      price: 70,
      name: "DIOR D6005U",
      url: "./asset/glassesImage/v4.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 5,
      price: 40,
      name: "PRADA P8750",
      url: "./asset/glassesImage/v5.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 6,
      price: 60,
      name: "PRADA P9700",
      url: "./asset/glassesImage/v6.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 7,
      price: 80,
      name: "FENDI F8750",
      url: "./asset/glassesImage/v7.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 8,
      price: 100,
      name: "FENDI F8500",
      url: "./asset/glassesImage/v8.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 9,
      price: 60,
      name: "FENDI F4300",
      url: "./asset/glassesImage/v9.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
  ];
  // render tung san pham khi map()va lay thuoc tinh url de show
  renderProduct = () => {
    const html = this.ProductItem.map(item => {
      let { id, name, url } = item;
      return (
        <div key={id} className={styles.itemPrc}>
          <img src={url} />

          <productData prod={item} />
        </div>
      );
    });
    return html;
  };

  render() {
    return (
      <div className={clsx(styles.Store)}>
        <div className={styles.row}>
          <div className={clsx(styles.model)}>
            <img src={modelImage} />
          </div>
        </div>

        <div className={styles.proDuct}>{this.renderProduct()}</div>
      </div>
    );
  }
}
