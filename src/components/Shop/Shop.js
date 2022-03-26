import React, { useState } from "react";
import Cart from "../Cart/Cart";
import Product from "../Product/Product";
import "./Shop.css";

const Shop = () => {
  const [cartItems, setCartItems] = useState([]);
  const addToCart = (item) => {
    setCartItems(item);
  };
  return (
    <div className="shop">
      <Product addToCart={addToCart} cartItems={cartItems}></Product>
      <Cart cartItems={cartItems}></Cart>
    </div>
  );
};

export default Shop;
