import React, { useEffect, useState } from "react";
import Item from "../Item/Item";
import "./Product.css";

const Product = ({ addToCart, cartItems }) => {
  const [products, setProducts] = useState([]);

  const handleAddToCart = (item) => {
    if (cartItems.length < 4) {
      const newCartItem = [...cartItems, item];
      addToCart(newCartItem);
    }
  };

  //   Fetch data from the fake DB
  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div className="products">
      {products.map((product) => (
        <Item
          product={product}
          key={product.id}
          handleAddToCart={handleAddToCart}
        ></Item>
      ))}
    </div>
  );
};

export default Product;
