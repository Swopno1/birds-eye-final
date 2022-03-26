import React from "react";
import "./Item.css";

const Item = ({ product }) => {
  const { name, price, img } = product;
  console.log(name);
  return (
    <div className="item">
      <img src={img} alt={name} />
      <h2>{name}</h2>
      <h3>Price: ${price}</h3>
      <button className="btn-addtocart">
        <p>ADD TO CART</p>
      </button>
    </div>
  );
};

export default Item;
