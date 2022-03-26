import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./Item.css";

const Item = ({ product }) => {
  const { name, price, brand, img } = product;
  console.log(name);
  return (
    <div className="item">
      <img src={img} alt={name} />
      <h2>{name}</h2>
      <p className="brand">Brand: {brand}</p>
      <p className="price">Price: ${price}</p>
      <button className="btn btn-addtocart">
        <p>ADD TO CART</p>
        <FontAwesomeIcon
          className="icon"
          icon={faCartShopping}
        ></FontAwesomeIcon>
      </button>
    </div>
  );
};

export default Item;
