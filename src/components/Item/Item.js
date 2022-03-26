import React from "react";

const Item = ({ product }) => {
  const { name, brand, price, img } = product;
  console.log(name);
  return (
    <div>
      <h1>{name}</h1>
      <img src={img} alt={name} />
    </div>
  );
};

export default Item;
