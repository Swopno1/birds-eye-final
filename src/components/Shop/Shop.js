import React, { useEffect, useState } from "react";
import Cart from "../Cart/Cart";
import Product from "../Product/Product";
import "./Shop.css";

const Shop = () => {
  const [cartItems, setCartItems] = useState([]);
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    // setCartItems(item);
    if (cartItems.length < 4) {
      const exist = cartItems.find((cartItem) => cartItem.id === item.id);

      if (!exist) {
        const newCartItem = [...cartItems, item];
        setCartItems(newCartItem);
      } else {
        alert("Already Selected!");
      }
    } else {
      alert("Already 4 items selected!");
    }
  };

  const resetCart = (data) => {
    if (cartItems.length !== 0) {
      setCartItems(data);
    } else {
      alert("Chart is empty!");
    }
  };

  useEffect(() => {
    setCart(cartItems);
  }, [cartItems]);

  return (
    <div className="shop">
      <Product addToCart={addToCart}></Product>
      <Cart cart={cart} resetCart={resetCart}></Cart>
    </div>
  );
};

export default Shop;
